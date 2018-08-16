const html = require('choo/html')

module.exports = function (entry) {
  return html`
    <a
      href=${entry.link}
      target="__blank"
      rel="noopener noreferrer"
      class="xn x xjb xac px4 tdn fc-white hv12-5 bg-white-h fc-dg-h"
      portrait="px2 xdc xas xjc ha pt1 pb1"
      short="ha pt0-8 pb0-8"
    >
      <div class="x xdc">
        <p class="m0" short="fs0-8">${entry.title}</p>
        <p class="m0 fs0-8" short="fs0-6">${entry.description}</p>
      </div>
      <p class="m0 fs0-8" short="fs0-6">${entry.role}</p>
    </a>
  `
}
