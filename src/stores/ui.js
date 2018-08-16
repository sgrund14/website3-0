module.exports = store

function store (state, emitter) {
  state.currentSection = 'home'
  emitter.on('DOMContentLoaded', () => {
    emitter.on('updateSection', section => {
      state.currentSection = section
    })
  })
}
