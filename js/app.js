let message = {
    'status' : null,
    'msg' : null
};
let alert       = null;
let alert_body  = null;

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
    let submit      = $('#contact-us-btn');
    let name        = $('#inp_name');
    let email       = $('#inp_email');
    let msg         = $('#inp_msg');
    let data        = [];
    alert           = $('#alert-msgs');    
    alert_body      = $('.alert-body');

    if(submit.length > 0){
        submit.on('click',function(){
            if(email.val() != ''){
                data = {
                    'name'  : name.val(),
                    'email' : email.val(),
                    'msg'   : msg.val(),
                }
                sendEmail(data);
            }else{
                message = {
                    'status': 'error',
                    'msg'   : 'Email field is required.'
                }
                alert_body.html('');
                alert_body.html(message.msg);
                alert.removeClass('alert-success');
                alert.removeClass('alert-danger');
                alert.addClass('alert-danger');
                alert.toggleClass('show');
            }
        });
    }
}

function sendEmail(data) {
    alert       = $('#alert-msgs');
    alert_body  = $('.alert-body');
    let submit  = $('.submit-wrap');
    let load    = $('.loading-wrap');

    submit.toggleClass('d-none');
    load.toggleClass('d-none');

    Email.send({
        // SecureToken : "f865c869-11c9-46ad-9663-ed95629af79f",
        Host: "smtp.gmail.com",
        Username: "pimpmybuzz2022@gmail.com",
        Password: "PimpMyBuzz_2022",
        To : 'jaanosa11@gmail.com',
        From : data.email,
        Subject : `Inquiry from ${data.name}`,
        Body : data.msg
    }).then(
      messages => {
        let status = null;
        let msgg   = null;
        message = {
            'status': null,
            'msg'   : null
        }
        console.log(messages);
        if(messages != 'OK'){
            status = 'error';
            msgg   = messages;
        }else{
            status = 'success';
            msgg   = 'Email successfully sent.'
        }
        message = {
            'status': status,
            'msg'   : msgg
        }

        alert_body.html('');
        alert_body.html(message.msg);
        alert.removeClass('alert-success');
        alert.removeClass('alert-danger');
        alert.addClass(message.status != 'success' ? 'alert-danger' : 'alert-success');
        alert.toggleClass('show');

        submit.toggleClass('d-none');
        load.toggleClass('d-none');
      } 
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