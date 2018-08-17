const html = require('choo/html')
const navigation = require('../components/navigation')
const about = require('../components/about')
const work = require('../components/work')
const contact = require('../components/contact')

const TITLE = 'Sam Grund'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="ff-sans m0">
      <div class="oh h100 w100 psa b0">
        ${navigation(state, emit)}
        ${about(state, emit)}
        ${work(state, emit)}
        ${contact(state, emit)}
      </div>
    </body>
  `
}
