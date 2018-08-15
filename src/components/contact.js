const html = require('choo/html')
const contactEntry = require('./contactEntry')
const { contactEntries: entries } = require('../content/entries')

module.exports = function (state, emit) {
  return html`
    <div
      id="contact"
      class="psa l20 w80 bg-black fc-white vhmn100 x xdc xjc"
      portrait="mhmobile p0 pt1 l0 w100 xjs"
    >
      ${entries.map(entry => contactEntry(entry))}
    </div>
  `
}
