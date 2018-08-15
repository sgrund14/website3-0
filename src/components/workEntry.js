const html = require('choo/html');

module.exports = function(entry) {
	return html`
		<a
			href=${entry.link}
			target="__blank"
			rel="noopener noreferrer"
			class="xn x xjb xac px4 tdn fc-white hv12-5 bg-white-h fc-dg-h"
			portrait="px2"
		>
			<div class="x xdc">
				<p class="m0">${entry.title}</p>
				<p class="m0 fs0-8">${entry.description}</p>
			</div>
			<p class="m0 fs0-8">${entry.role}</p>
		</a>
	`;
};