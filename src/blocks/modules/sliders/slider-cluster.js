import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
});


const initSlider = () => {
    const mySwiper = new Swiper('.slider-cluster', {
        autoHeight: true,
        pagination: {
            el: '.slider-cluster__pagination',
            bulletClass: 'slider-cluster__bullet',
            bulletActiveClass: 'slider-cluster__bullet--active'
        },
        navigation: {
            nextEl: '.slider-cluster__btn--next',
            prevEl: '.slider-cluster__btn--prev',
            disabledClass: 'slider-cluster__btn--disabled'
        },
    })
}
