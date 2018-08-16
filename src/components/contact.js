const html = require('choo/html')
const contactEntry = require('./contactEntry')
const { contactEntries: entries } = require('../content/entries')

module.exports = function (state, emit) {
  return html`
    <div
      id="contact"
      class="psa l20 w80 bg-black fc-white vhmn100 x xdc xjc"
      portrait="mnhmobile p0 l0 w100 hv75"
      small="l30 w70"
      short="ha"
    >
      <div
        class="h100 w100 os"
      >
        ${entries.map(entry => contactEntry(entry))}
      </div>
    </div>
  `
}
