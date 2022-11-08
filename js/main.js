const promoSwiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: false,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 20,
    watchOverflow: true,
    pagination: {
        el: ".banner-swiper-pagination",
        clickable: "true",
    },
});