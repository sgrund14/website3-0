const html = require('choo/html')
const navigation = require('../components/navigation')
const about = require('../components/about')
const work = require('../components/work')
const contact = require('../components/contact')

const TITLE = 'Sammy G'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="ff-sans oh m0">
      ${navigation(state, emit)}
      ${about(state, emit)}
      ${work(state, emit)}
      ${contact(state, emit)}
    </body>
  `
}
