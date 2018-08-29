module.exports = store

function store (state, emitter) {
  state.currentSection = 'about'
  emitter.on('DOMContentLoaded', () => {
    emitter.on('updateSection', section => {
      state.currentSection = section
    })
  })
}
