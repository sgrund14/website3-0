const html = require('choo/html');

module.exports = function(state, emit) {
	return html`
		<div
			id="about"
			class="psa l20 w80 bg-lg fc-white vhmn100 pl4"
			portrait="mhmobile p0 pt1 l0 w100"
		>
			<ul
				class="m0 hv25 x xdc xjc fs1-2 fwn lh2 lsn p0"
				portrait="fs1 lh1-6 hv15 pl2"
			>
				<li>Programmer</li>
				<li>Brother</li>
				<li>Son</li>
			</ul>
			<ul
				class="m0 hv25 x xdc xjc fs1 fwn lh2 lsn p0"
				portrait="fs0-8 lh1-6 hv15 pl2"
			>
				<li>New York City</li>
				<li>Front End Engineer @ 1stdibs</li>
			</ul>
		</div>
	`;
};
