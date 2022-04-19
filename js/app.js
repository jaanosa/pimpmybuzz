$( document ).ready(function() {
    // initialize animation on scroll
    AOS.init();

    //initialize swiper
    initSwiper();
});

function initSwiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
}
  
