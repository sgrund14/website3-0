const html = require('choo/html');
const about = require('./about');

module.exports = function(state, emit) {
	return html`
		<div
			class="psa l20 w80 t0 vhmx100"
			portrait="l0 w100 mt2-4 mxhmobile"
		>
			<div
				class="vhmn100"
				portrait="mhmobile"
				id="home"
			>
			</div>
			${about(state, emit)}
			<div
				id="work"
				class="bg-dg fc-white vhmn100 pb3"
				portrait="mhmobile p0"
			>
			
			</div>
			<div
				id="contact"
				class="bg-black fc-white vhmn100 pb3"
				portrait="mhmobile p0"
			>
			
			</div>
		</div>
	`;
};
