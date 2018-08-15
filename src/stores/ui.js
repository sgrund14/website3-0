module.exports = store

function store (state, emitter) {
	state.currentSection = 'home';
	state.onMobile = window.matchMedia('(orientation: portrait)').matches;
	emitter.on('DOMContentLoaded', () => {
		emitter.on('updateSection', section => {
			state.currentSection = section;
		})
	});
}
