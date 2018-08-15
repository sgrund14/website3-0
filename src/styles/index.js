const gr8 = require('gr8')

// font constants
const type = {
  'inter': '"Inter UI"'
}
// color constants
const colors = {
  lg: '#ededed',
  dg: '#5c5c5c',
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
    { mobile: 'calc(100vh - 2.2rem)' },
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
  vals: [0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
  unit: 'rem'
}

const styling = {
  prop: 'list-style',
  vals: ['none']
}

const gr8css = gr8({
  breakpoints: {
    portrait: '(orientation: portrait)',
    small: 650
  },
  utils: [
    colorUtil,
    fonts,
    placement,
    fontSizes,
    sizing,
    spacing,
    styling,
    lineHeight
  ]
})

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

  .navRow, #about, #work, #contact, .link {
    transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .navRow:hover {
    transform: translateY(-1rem)
  }
  @media (orientation: portrait) {
    .navRow:hover {
      transform: unset;
    }
  }
`

module.exports = [
  gr8css.toString(),
  custom
].join(' ')
