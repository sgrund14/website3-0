const html = require('choo/html')
const workEntry = require('./workEntry')
const { workEntries: entries } = require('../content/entries')

module.exports = function (state, emit) {
  return html`
    <div
      id="work"
      class="psa l20 w80 bg-dg fc-white hv75"
      portrait="mnhmobile p0 l0 w100"
      small="l30 w70"
    >
      <div
        class="h100 w100 os x xdcr"
        portrait="db"
      >
        ${entries.map(entry => workEntry(entry))}
      </div>
    </div>
  `
}
