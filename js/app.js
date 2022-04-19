$(document).ready(function () {
    // initialize animation on scroll
    AOS.init();

    //initialize swiper
    initSwiper();

    //initialize mobile hamburger menu
    setNav();

    //initialize email function
    initEmail();
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

function initEmail() {
    let submit = $('#contact-us-btn');
    if(submit.length > 0){
        submit.on('click',function(){
            sendEmail();
        });
    }
}

function sendEmail() {
    // Email.send({
    //   Host: "smtp.gmail.com",
    //   Username: "pimpmybuzz2022@gmail.com",
    //   Password: "PimpMyBuzz_2022",
    //   To: 'jaanosa11@gmail.com',
    //   From: "pimpmybuzz2022@gmail.com",
    //   Subject: "Sending Email using javascript",
    //   Body: "Well that was easy!!",
    // })
    //   .then(function (message) {
    //     alert(message);
    //     // alert("mail sent successfully")
    //   });
    Email.send({
        // SecureToken : "f865c869-11c9-46ad-9663-ed95629af79f",
        Host: "smtp.gmail.com",
        Username: "pimpmybuzz2022@gmail.com",
        Password: "PimpMyBuzz_2022",
        To : 'jaanosa11@gmail.com',
        From : "jessie.allen.anosa@acret-ph.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

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