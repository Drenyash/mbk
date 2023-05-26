import Swiper from 'swiper';

(function () {
	const mySwiper = new Swiper('.slider-front__container', {
		autoHeight: true,
		pagination: {
			el: '.slider-front__fraction',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<div class="slider-front__now ' + currentClass + '"></div>' +
					'<div class="slider-front__sep"></div>' +
					'<div class="slider-front__all ' + totalClass + '"></div>';
			}
		},
		navigation: {
			nextEl: '.slider-front__btn--next',
			prevEl: '.slider-front__btn--prev',
			disabledClass: 'slider-front__btn--disabled'
		},
	})
})();

(function () {
	const mySwiper = new Swiper('.slider-page__container', {
		autoHeight: true,
		pagination: {
			el: '.slider-page__fraction',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<div class="slider-page__now ' + currentClass + '"></div>' +
					'<div class="slider-page__sep"></div>' +
					'<div class="slider-page__all ' + totalClass + '"></div>';
			}
		},
		navigation: {
			nextEl: '.slider-page__btn--next',
			prevEl: '.slider-page__btn--prev',
			disabledClass: 'slider-page__btn--disabled'
		},
	})
})();

(function () {
	const parent = document.querySelector('.slider-articles');
	const buttontsPrev = document.querySelectorAll('[data-slider-articles-button="prev"]');
	const buttontsNext = document.querySelectorAll('[data-slider-articles-button="next"]');

	if (parent) {
		const mySwiper = new Swiper(parent.querySelector('.slider-articles__container'), {
			autoHeight: true,
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: parent.querySelector('.button-toolbar--next'),
				prevEl: parent.querySelector('.button-toolbar--prev'),
				disabledClass: 'button-toolbar--disabled'
			},
			breakpoints: {
				460: {
				  slidesPerView: 2,
				  spaceBetween: 20
				},
				680: {
				  slidesPerView: 3,
				  spaceBetween: 30
				},
				1200: {
				  slidesPerView: 4,
				  spaceBetween: 40,
					loop: false,
				}
			}
		});

		buttontsNext.forEach((el) => {
			el.addEventListener('click', () => {
				mySwiper.slideNext();
			});
		});

		buttontsPrev.forEach((el) => {
			el.addEventListener('click', () => {
				mySwiper.slidePrev();
			});
		});
	}
})();

(function () {
	let parent = document.querySelector('.slider-gallery');

	if (parent) {
		const mySwiper = new Swiper(parent.querySelector('.slider-gallery__container'), {
			autoHeight: true,
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: parent.querySelector('.slider-gallery__pagination'),
				bulletClass: 'slider-gallery__bullet',
				bulletActiveClass: 'slider-gallery__bullet--active'
			},
			navigation: {
				nextEl: parent.querySelector('.button-toolbar--next'),
				prevEl: parent.querySelector('.button-toolbar--prev'),
				disabledClass: 'button-toolbar--disabled'
			},
			breakpoints: {
				460: {
				  slidesPerView: 2,
				  spaceBetween: 20
				},
				680: {
				  slidesPerView: 3,
				  spaceBetween: 30
				},
				1200: {
				  slidesPerView: 4,
				  spaceBetween: 40
				}
			}
		})
	}
})();
(function () {
	const mySwiper = new Swiper('.slider-intro', {
		autoHeight: true,
		pagination: {
			el: '.slider-page__fraction',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<div class="slider-page__now ' + currentClass + '"></div>' +
					'<div class="slider-page__sep"></div>' +
					'<div class="slider-page__all ' + totalClass + '"></div>';
			}
		},
		navigation: {
			nextEl: '.slider-page__btn--next',
			prevEl: '.slider-page__btn--prev',
			disabledClass: 'slider-page__btn--disabled'
		},
	})
})();

(function () {
	const mySwiper = new Swiper('.slider-news', {
		slidesPerView: "auto",
		spaceBetween: 30,
		pagination: {
			el: '.slider-news__pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<div class="slider-page__now ' + currentClass + '"></div>' +
					'<div class="slider-page__sep"></div>' +
					'<div class="slider-page__all ' + totalClass + '"></div>';
			}
		},
		navigation: {
			nextEl: '.slider-news__slide-btn--next',
			prevEl: '.slider-news__slide-btn--prev',
			disabledClass: 'slider-page__btn--disabled'
		},
	})
})();
