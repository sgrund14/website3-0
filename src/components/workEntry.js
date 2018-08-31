const html = require('choo/html')

module.exports = function (entry) {
  return html`
    <a
      href=${entry.link}
      target="__blank"
      rel="noopener noreferrer"
      class="xn x xjb xac px4 tdn fc-white hv12-5 workEntry"
      portrait="px2 xdc xas xjc ha pt1 pb1"
      short="ha pt0-8 pb0-8"
    >
      <div class="x w50 xac" portrait="w100 xdc">
        <div class="x xjc xac mr0-8">
          <span>${ "->" }</span>
          <img src="${entry.imgSrc}" alt="${entry.title}" class="w100 h100 workImg"/>
        </div>
        <div class="x xdc" portrait="mt0-8">
          <p class="m0" small="fs0-6" short="fs0-8">${entry.title}</p>
          <p class="m0 fs0-8 mt0-6" small="fs0-6" short="fs0-6">${entry.description}</p>
        </div>
      </div>
      <p class="m0 fs0-8" small="fs0-6" short="fs0-6">${entry.role}</p>
    </a>
  `
}
