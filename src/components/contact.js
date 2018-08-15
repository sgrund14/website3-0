const html = require('choo/html');
const contactEntry = require('./contactEntry');

const entries = [
	{
		platform: 'email',
		username: 'sgrund626@gmail.com',
		link: 'mailto:sgrund626@gmail.com'
	},
	{
		platform: 'github',
		username: '@sgrund14',
		link: 'https://github.com/sgrund14'
	},
	{
		platform: 'are.na',
		username: '@samuel-grund',
		link: 'https://www.are.na/samuel-grund'
	},
	{
		platform: 'twitter',
		username: '@gruno14',
		link: 'https://twitter.com/gruno14'
	},
	{
		platform: 'instagram',
		username: '@gruno14',
		link: 'https://www.instagram.com/gruno14/'
	},
	{
		platform: 'linkedin',
		username: '@samuel-grund',
		link: 'www.linkedin.com/in/samuel-grund-2a7481108'
	},
	{
		platform: 'p2p',
		username: 'dat://0f58a693ac47446a47e654400e43fc9b66e889ecf3c16fdf62f33e884fd83132',
		link: 'dat://0f58a693ac47446a47e654400e43fc9b66e889ecf3c16fdf62f33e884fd83132'
	},
	{
		platform: 'scuttlebutt',
		username: '@0ha3+Rp+7zKF65nchmlYG9U5mm9hW115xVXIixQEJxc=.ed25519',
		link: ''
	}
];

module.exports = function(state, emit) {
	return html`
		<div
			id="contact"
			class="psa l20 w80 bg-black fc-white vhmn100 x xdc xjc"
			portrait="mhmobile p0 pt1 l0 w100 xjs"
		>
			${entries.map(entry => contactEntry(entry))}
		</div>
	`;
};
