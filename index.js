const css = require('sheetify')
const choo = require('choo')
const main = require('./src/views/main')
const ui = require('./src/stores/ui')

css('./src/styles/index.js')

const app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(ui)

app.route('/', main)
app.route('/*', main)
module.exports = app.mount('body')
