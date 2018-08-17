const html = require('choo/html')
const workEntry = require('./workEntry')
const { workEntries: entries } = require('../content/entries')

module.exports = function (state, emit) {
  return html`
    <div
      id="work"
      class="psa l20 w80 t0 try100 bg-dg fc-white hv75"
      portrait="p0 l0 b0 w100 tmobile trymobile ha pt0-6"
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
