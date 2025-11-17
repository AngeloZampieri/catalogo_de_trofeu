const swiper = new Swiper('.swiper', 
    { loop: !0, 
    spaceBetween: 10, 
    slidesPerView: 3, 
    pagination: { el: '.swiper-pagination', type: 'bullets', }, 
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, 
    effect: 'coverflow', 
    coverflowEffect: { rotate: 20, stretch: 0, depth: 0, modifier: 1, scale: 0.8, slideShadows: !1, }, 
    autoplay: { delay: 4000, disableOnInteraction: !1, }, })