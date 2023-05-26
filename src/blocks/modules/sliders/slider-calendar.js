import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/js/swiper.esm";

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
});


const initSlider = () => {
    const mySwiper = new Swiper('.slider-calendar', {
        modules: [ Navigation, Pagination ],
        slidesPerView: 2,
        spaceBetween: 20,
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        pagination: {
            el: '.slider-news__pagination',
            bulletClass: 'slider-cluster__bullet',
            bulletActiveClass: 'slider-cluster__bullet--active',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-news__slide-btn--next',
            prevEl: '.slider-news__slide-btn--prev',
            disabledClass: 'slider-cluster__btn--disabled'
        },
    })
}
