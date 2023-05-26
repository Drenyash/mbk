import fancybox from '@fancyapps/fancybox';

document.addEventListener("DOMContentLoaded", ready);

function ready() {
	// Выпадение дроп-карточки

	(function () {
		const dropArrow = document.querySelectorAll('.drop-card__header');

		if (dropArrow) {
			for (let i = 0; i < dropArrow.length; i++) {
				dropArrow[i].addEventListener('click', function () {
					this.parentNode.classList.toggle('drop-card--open');
				})

				dropArrow[i].addEventListener('keydown', function () {
					if (event.code == 'Enter') {
						event.preventDefault();
						this.parentNode.classList.toggle('drop-card--open');
					}
				})
			}
		}

	})();

	// Переключения radio с клавиатуры

	(function () {
		const radio = document.querySelectorAll('.radio');

		if (radio) {
			for (let i = 0; i < radio.length; i++) {
				radio[i].addEventListener('keydown', setCustomEvent);
			}
		}

		function setCustomEvent() {
			if (event.code == 'Space') {
				event.preventDefault();
				this.querySelector('input').checked = true;
			}
		}

	})();

	// Переключения checkbox с клавиатуры

	(function () {
		const radio = document.querySelectorAll('.checkbox');

		if (radio) {
			for (let i = 0; i < radio.length; i++) {
				radio[i].addEventListener('keydown', setCustomEvent);
			}
		}

		function setCustomEvent() {
			if (event.code == 'Space') {
				event.preventDefault();
				if (this.querySelector('input').checked == true) {
					this.querySelector('input').checked = false;
				} else {
					this.querySelector('input').checked = true;
				}

			}
		}

	})();

	// Переключение табов контента

	(function toggleContentTabs() {
		const units = document.querySelectorAll('.units');

		if (units) {

			for (let n = 0; n < units.length; n++) {
				let tabs = units[n].querySelectorAll('.tabs__link');
				let blocks = units[n].querySelectorAll('.units__block');

				for (let z = 0; z < tabs.length; z++) {
					tabs[z].addEventListener('click', function (e) {
						e.preventDefault();
						console.log(z);
						select(tabs, blocks, z);
					});
				}

			}
		}

		function select(tabs, blocks, n) {
			for (let m = 0; m < tabs.length; m++) {
				tabs[m].classList.remove('tabs__link--active');
				blocks[m].classList.remove('units__block--active');
			}
			tabs[n].classList.add('tabs__link--active');
			blocks[n].classList.add('units__block--active');
		}

	})();

	// Переключение вида списка книг

	(function toogleBookList() {
		const btnList = document.querySelector('.tab-btns__btn--list');
		const btnCards = document.querySelector('.tab-btns__btn--cards');
		const list = document.querySelector('.books');

		if (btnList && btnCards && list) {
			btnList.addEventListener('click', function (e) {
				btnCards.classList.remove('tab-btns__btn--active');
				this.classList.add('tab-btns__btn--active');
				e.preventDefault();
				list.classList.remove('books--cards');
			});

			btnCards.addEventListener('click', function (e) {
				btnList.classList.remove('tab-btns__btn--active');
				this.classList.add('tab-btns__btn--active');
				e.preventDefault();
				list.classList.add('books--cards');
			})
		}
	})();

	// Скролл наверх


	(function scrollTop() {
		const btn = document.querySelector('.footer__to-top');

		if (btn) {
			btn.addEventListener('click', function () {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			})
		}
	})();

	(function fixedTopBtn() {
		let btn = document.querySelector('.footer__to-top');

		if (btn) {
			window.addEventListener('scroll', toggleBtn);
		}

		function toggleBtn() {

			if (btn) {
				if (pageYOffset > 3000) {
					btn.classList.add('footer__to-top--visible');
				} else {
					btn.classList.remove('footer__to-top--visible');
				}
			}
		}

		toggleBtn();

	})();
}

