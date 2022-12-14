$(document).ready(function(){
    $('.navbar>ul>li>a').click(function(e){
        e.preventDefault();
        $(this).siblings().slideToggle().parent().siblings().find('.list').slideUp();
    });
    $('.scrolltotop>a').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0}, 700);
    });
});
$(window).scroll(function(){
  last=$("body").height()-$(window).height()
  if($(window).scrollTop()+200>=last){
      $(".scrolltotop").show();
  }else{
      $(".scrolltotop").hide();
  }
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