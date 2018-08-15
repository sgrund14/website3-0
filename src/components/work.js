const html = require('choo/html');
const workEntry = require('./workEntry');

const entries = [
	{
		title: 'FABB',
		description: 'Femme Artists Breaking Boundaries',
		role: 'Web Design + Development',
		link: 'https://fabb.world'
	},
	{
		title: 'WOBC',
		description: 'Oberlin College and Community Radio',
		role: 'Web Design + Development',
		link: 'https://www.wobc.org'
	},
	{
		title: 'Prism',
		description: 'A Salt and Pepper Games Production',
		role: 'Web/Game Design + Development',
		link: 'https://salt-and-pepper-games.github.io/prism/'
	},
	{
		title: 'DDJ',
		description: 'A Site for Deborah Davis Jackson',
		role: 'Web Design + Development',
		link: 'http://deborahdavisjackson.org/'
	},
];

module.exports = function(state, emit) {
	return html`
		<div
			id="work"
			class="psa l20 w80 bg-dg fc-white hv75"
			portrait="mhmobile p0 pt1 l0 w100 vhmn100"
		>
			<div
				class="h100 w100 os x xdcr"
				portrait="ha"
			>
				${entries.map(entry => workEntry(entry))}
			</div>
		</div>
	`;
};
