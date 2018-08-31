const gr8 = require('gr8')

// font constants
const type = {
  'sans': 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue'
}
// color constants
const colors = {
  lg: '#ededed',
  dg: '#5c5c5c',
  blue: 'rgb(0,0,255)',
  bluegrey: '#545475',
  black: 'rgb(0, 0, 0)',
  white: 'rgb(255, 255, 255)'
}
//

// font util
const fonts = {
  prop: {
    'ff': 'font-family'
  },
  vals: type,
  join: '-'
}

// background/font color util
const colorUtil = {
  prop: {
    'bg': 'background-color',
    'fc': 'color'
  },
  vals: colors,
  join: '-',
  modifiers: [false, ':hover']
}

// positioning util
const placement = {
  prop: {
    t: 'top',
    l: 'left',
    h: 'height',
    w: 'width'
  },
  vals: [
    { 'a': 'auto' },
    { 'mobile': '2.6rem' },
    0,
    10,
    20,
    25,
    30,
    33.3,
    { 'v6-25': '6.25vh' },
    { 'v12-5': '12.5vh' },
    { v15: '15vh' },
    { v20: '20vh' },
    { v25: '25vh' },
    { w25: '25vw' },
    { v75: '75vh' },
    { v100: '100vh' },
    50,
    66.7,
    70,
    75,
    80,
    90,
    100
  ],
  unit: '%'
}
const translations = {
  prop: {
    tr: 'transform'
  },
  vals: [
    { y75: 'translateY(75vh)' },
    { y100: 'translateY(100vh)' },
    { ymobile: 'translateY(calc(100vh - 2.6rem))' }
  ]
};

const lineHeight = {
  prop: 'line-height',
  vals: [1, 1.2, 1.4, 1.6, 1.8, 2],
  unit: 'rem'
}
const sizing = {
  prop: {
    mnh: 'min-height',
    mxh: 'max-height'
  },
  vals: [
    { mobile: 'calc(100vh - 2.5rem)' },
    { '75': '75vh' }
  ]
}
const spacing = {
  prop: {
    m: 'margin',
    mt: 'margin-top',
    mb: 'margin-bottom',
    p: 'padding',
    pt: 'padding-top',
    pb: 'padding-bottom'
  },
  vals: [0.6, 0.8, 2.2, 2.4, 2.6],
  unit: 'rem'
}

// font-size util
const fontSizes = {
  prop: {
    fs: 'font-size'
  },
  vals: [0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
  unit: 'rem'
}

const styling = {
  prop: 'list-style',
  vals: ['none']
}

const typography = {
  prop: 'word-break',
  vals: ['break-all', 'break-word']
}
const mobileBreakpoint = '(orientation: portrait), (max-width: 650px)';
const gr8css = gr8({
  breakpoints: {
    portrait: `${mobileBreakpoint}`,
    small: '(min-width: 650px) and (max-width: 1024px)',
    short: '(max-height: 500px) and (min-width: 650px)'
  },
  utils: [
    colorUtil,
    fonts,
    placement,
    fontSizes,
    sizing,
    spacing,
    styling,
    lineHeight,
    typography,
    translations
  ]
})
const height = '6.25vh';
const custom = `
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings:"kern" 1; 
    -ms-font-feature-settings:"kern" 1; 
    -o-font-feature-settings:"kern" 1; 
    -webkit-font-feature-settings:"kern" 1; 
    font-feature-settings:"kern" 1;
    font-kerning: normal;
  }
  .mobile-scroll {
    -webkit-overflow-scrolling: touch;
  }

  .navRow, #about, #work, #contact, .link, .workImg {
    transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .navRow:hover {
    transform: translateY(-.5rem)
  }
  .panel-active {
    transform: translateY(0);
  }
  .workImg {
    height: ${height};
    width: calc(${height} * 1.96829971182);
    border-radius: 5%;
    transition: transform .15s;
  }
  .workEntryBottom {
    width: calc(${height} * 1.5);
  }
  .workEntry:hover > div > .workImg {
    transform: translateX(-16px) scale(1.2);
  }
  @media (max-height: 500px) {
    .navRow:hover {
      transform: translateY(-.25rem)
    }
  }
  @media ${mobileBreakpoint} {
    .navRow:hover {
      transform: unset;
    }
  }
`

module.exports = [
  gr8css.toString(),
  custom
].join(' ')
