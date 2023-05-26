import Swiper from 'swiper';

export function initSlider (el) {
    let sliderThumbs = el.querySelector('.slider-thumbs__thumbs');
    let sliderMain = el.querySelector('.slider-thumbs__main');

    const swiper = new Swiper(sliderThumbs, {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        pagination: {
            el: '.slider-thumbs__pagination',
            bulletClass: 'slider-thumbs__bullet',
            bulletActiveClass: 'slider-thumbs__bullet--active',
        },
        breakpoints: {
            440: {
              slidesPerView: 2,
            },
            780: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          }
    });
    const swiper2 = new Swiper(sliderMain, {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".slider-thumbs__button--next",
            prevEl: ".slider-thumbs__button--prev",
            disabledClass: 'slider-thumbs__button--disabled'
        },
        thumbs: {
            swiper: swiper,
        },
    });
}