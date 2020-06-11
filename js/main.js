; (function () {
	"use strict";

	const buttons = $('button[data-tab]');
	const tabs = $('.ba-tab__content[data-tab]');

	buttons.on('click', function () {

		if (this.getAttribute('data-tab') == 'disabled') {
			$('button[data-tab="active"]').get(0).setAttribute("data-tab", "disabled");
			$('.ba-tab__content[data-tab="active"]').get(0).setAttribute("data-tab", "disabled");
			this.setAttribute("data-tab", "active");

			let tab = (tabs.get(buttons.index(this)));
			tab.setAttribute("data-tab", "active");

		}
	});
})();

