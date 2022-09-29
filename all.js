$(document).ready(function(){
    $('.header2>ul>li>a').click(function(e){
        e.preventDefault();
        $(this).siblings().slideToggle().parent().siblings().find('.test').slideUp();
    });
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true,
    autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    effect: "cube",
    cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});