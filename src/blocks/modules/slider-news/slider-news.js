import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
});


let initSlider = () => {
    const sliderNews = new Swiper('.slider-news', {
        init: false,
        pagination: {
            el: '.slider-news__pagination',
            bulletActiveClass: 'slider-news__bullet--active',
            bulletClass: 'slider-news__bullet'
        },
        navigation: {
            nextEl: '.slider-news__slide-btn--next',
            prevEl: '.slider-news__slide-btn--prev',
            disabledClass: 'slider-news__slide-btn--disabled'
        },
    });

    if (window.innerWidth > 1200) {
        sliderNews.init();
    }
}