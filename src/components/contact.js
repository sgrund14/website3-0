const html = require('choo/html')
const contactEntry = require('./contactEntry')
const { contactEntries: entries } = require('../content/entries')

module.exports = function (state, emit) {
  return html`
    <div
      id="contact"
      class="psa l20 w80 t0 try100 bg-black fc-white hv100 x xdc xjc"
      portrait="p0 l0 b0 w100 tmobile trymobile xjs ha pt0-6"
      small="l30 w70"
      short="ha"
    >
      <div
        class="ha w100 os"
      >
        ${entries.map(entry => contactEntry(entry))}
      </div>
    </div>
  `
}
