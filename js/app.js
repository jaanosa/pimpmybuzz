$(document).ready(function () {
    // initialize animation on scroll
    AOS.init();

    //initialize swiper
    initSwiper();

    //initialize mobile hamburger menu
    setNav();
});

$(window).on('scroll resize', function () {
    let toggled = $('.toggle-nav');
    let hamburger = $('.nav-hamburger'),
        mobile_nav = $('.mobile-nav'),
        body = $('body');

    if(toggled.length > 0){
        $(mobile_nav).toggleClass('toggle-nav');
        $(hamburger).toggleClass('toggle-menu');
        $(body).toggleClass('toggle-body');
    }
});

function initSwiper() {
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

//for menu toggle
function setNav() {
    let hamburger = $('.nav-hamburger'),
        mobile_nav = $('.mobile-nav'),
        body = $('body');

    $(hamburger).on('click', function () {
        $(mobile_nav).toggleClass('toggle-nav');
        $(hamburger).toggleClass('toggle-menu');
        $(body).toggleClass('toggle-body');
    });
}