const html = require('choo/html')

module.exports = function (entry) {
  return html`
    <a
      href=${entry.link}
      target="__blank"
      rel="noopener noreferrer"
      class="x xjb xac px4 tdn fc-white hv6-25 bg-white-h fc-black-h"
      portrait="px2 ha pt1 pb1"
    >
      <p class="m0 fs0-8">${entry.platform}</p>
      <p class="m0 fs0-8" portrait="wbba ml2">${entry.username}</p>
    </a>
  `
}
