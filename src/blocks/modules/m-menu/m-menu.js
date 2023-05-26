import Mmenu from 'mmenu-js';

(function initMobileMenu() {
	let menuArray = mobileLinks || null;

	let mainMenu = document.querySelector('#mmenu');

	if (mainMenu) {
		new Mmenu(mainMenu, {
			"extensions": [
				"pagedim-black"
			],
			"navbar": {
				"title": "Мой Бизнес"
			},
			"navbars": [
				{
					"position": "bottom",
					"content": mobileContacts
				},
				{
					"position": "bottom",
					"content": mobileLinks
				}
			]
		});
	}
})();

(function initMobileMMenu() {
	let menuArray = mobileLinks || null;

	let menu2 = document.querySelector('#mmenu-m');

	if (menu2) {
		new Mmenu(menu2, {
			"extensions": [
				"pagedim-black"
			],
			"navbar": {
				"title": "Микрокредитование"
			},
		});
	}
})();