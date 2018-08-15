module.exports = store

function store (state, emitter) {
  state.currentSection = 'home'
  emitter.on('DOMContentLoaded', () => {
  	state.onMobile = window.matchMedia('(orientation: portrait)').matches
    emitter.on('updateSection', section => {
      state.currentSection = section
    })
  })
}
