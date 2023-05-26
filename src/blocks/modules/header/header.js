(function () {
	(function toggleMenu(){
		const btn1 = document.querySelector('#header__btn-1');
		const btn2 = document.querySelector('#header__btn-2');
		const menu1 = document.querySelector('.drop-nav--support');
		const menu2 = document.querySelector('.drop-nav--help');

		if (btn1 && menu1) {
			btn1.addEventListener('click', function(e) {
				e.preventDefault();
				if (menu2) {
					menu2.classList.remove('drop-nav--open');
				}
				menu1.classList.toggle('drop-nav--open');
			})
		}

		if (btn2 && menu2) {
			btn2.addEventListener('click', function(e) {
				e.preventDefault();
				if (menu1) {
					menu1.classList.remove('drop-nav--open');

				}
				menu2.classList.toggle('drop-nav--open');
			})
		}

	})();

})();