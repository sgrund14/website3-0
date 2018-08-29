const html = require('choo/html')

module.exports = function (entry) {
  return html`
    <a
      href=${entry.link}
      target="__blank"
      rel="noopener noreferrer"
      class="x xjb xac px4 tdn fc-white hv6-25 bg-blue-h fc-white-h"
      portrait="px2 ha pt1 pb1"
      short="ha pt0-6 pb0-6"
    >
      <p class="m0 fs0-8" short="fs0-6">${entry.platform}</p>
      <p class="m0 fs0-8 wbba ml2" short="fs0-6">${entry.username}</p>
    </a>
  `
}
