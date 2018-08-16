module.exports = store

function store (state, emitter) {
  state.currentSection = 'home'
  emitter.on('DOMContentLoaded', () => {
  	const mq = window.matchMedia('(orientation: portrait)')
  	state.onMobile = mq.matches
  	mq.addListener(mq => {
  		emitter.emit('updateDevice', mq.matches)
  	})
    emitter.on('updateSection', section => {
      state.currentSection = section
    })
    emitter.on('updateDevice', onMobile => {
    	state.onMobile = onMobile
    })
  })
}
