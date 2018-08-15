const css = require('sheetify');
const choo = require('choo');
const main = require('./src/views/main');
const notFound = require('./src/views/404');
const ui = require('./src/stores/ui');

css('./src/styles/index.css');
css('./src/styles/index.js');
console.log(require('./src/styles/index.js'))

const app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(ui);

app.route('/:section', main);

module.exports = app.mount('body')
