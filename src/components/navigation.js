const html = require('choo/html')

const translationMap = {
  work: '-100',
  about: '-75',
  contact: '-100'
}

module.exports = function (state, emit) {
  function scrollTo (id) {
    const el = document.getElementById(id)
    if (el) {
      if (state.currentSection === id) {
        emit('updateSection', 'home')
        el.classList.remove(`panel-active`)
      } else {
        // close old section
        const old = document.getElementById(state.currentSection)
        if (old) {
          old.classList.remove(`panel-active`)
        }
        // view new section
        emit('updateSection', id)
        el.classList.add(`panel-active`)
      }
    }
  }
  return html`
    <div class="oh h100 w100 m0 psr">
      <div
            class="fs1-4 pl4 psa t0 h25 w100 pb1 x xac usn"
            portrait="p0 ha b0 ww25 l0 xjc xas fs0-8 pt0-8"
            short="fs1"
            onclick=${() => scrollTo('home')}
          >
            Sam Grund
          </div>
          <div
            class="fs1-4 pl4 curp navRow bg-lg fc-black psa t25 h25 w100 pb1 x xac usn"
            portrait="p0 ha b0 ww25 l25 t0 xjc xas fs0-8 pt0-8"
            short="fs1"
            onclick=${() => scrollTo('about')}
          >
            About
          </div>
          <div
            class="fs1-4 pl4 curp navRow bg-dg fc-white psa t50 h25 w100 pb1 x xac usn"
            portrait="p0 ha b0 ww25 l50 t0 xjc xas fs0-8 pt0-8"
            short="fs1"
            onclick=${() => scrollTo('work')}
          >
            Work
          </div>
          <div
            class="fs1-4 pl4 curp navRow bg-black fc-white psa t75 h25 w100 pb1 x xac usn"
            portrait="p0 ha b0 ww25 l75 t0 xjc xas fs0-8 pt0-8"
            short="fs1"
            onclick=${() => scrollTo('contact')}
          >
            Contact
          </div>
        </div>
  `
}
