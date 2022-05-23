if(document.querySelector('.partners__slider')) {
    let partnersSlider = new Swiper(".partners__slider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
          
        navigation: {
            nextEl: ".partners__slider--next",
            prevEl: ".partners__slider--prev",
        },
    });
}