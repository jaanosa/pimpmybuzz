let message = {
    'status': null,
    'msg': null
};
let alert = null;
let alert_body = null;
let submit = null;
let name = null;
let email = null;
let phone = null;
let website = null;
let msg = null;

$(document).ready(function () {
    // initialize animation on scroll
    AOS.init();

    //initialize swiper
    initSwiper();

    //initialize mobile hamburger menu
    setNav();

    //initialize email function
    initEmail();

    //initialize alert close function
    closeAlert();

    //initialize text trim
    textReadMore();
});

$(window).on('scroll resize', function () {
    let toggled = $('.toggle-nav');
    let hamburger = $('.nav-hamburger'),
        mobile_nav = $('.mobile-nav'),
        body = $('body');

    if (toggled.length > 0) {
        $(mobile_nav).toggleClass('toggle-nav');
        $(hamburger).toggleClass('toggle-menu');
        $(body).toggleClass('toggle-body');
    }
});

function initVariables() {
    submit = $('#contact-us-btn');
    name = $('#inp_name');
    email = $('#inp_email');
    phone = $('#inp_phone')
    website = $('#inp_website')
    msg = $('#inp_msg');
    alert = $('#alert-msgs');
    alert_body = $('.alert-body');
}

function initEmail() {
    let data = [];
    initVariables();

    if (submit.length > 0) {
        submit.on('click', function () {
            if (email.val() != '') {
                data = {
                    'name': name.val(),
                    'email': email.val(),
                    'phone': phone.val(),
                    'website': website.val(),
                    'msg': msg.val(),
                }
                sendEmail(data);
            } else {
                message = {
                    'status': 'error',
                    'msg': 'Email field is required.'
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
    let submit = $('.submit-wrap');
    let load = $('.loading-wrap');
    let btn = $('#contact-us-btn');
    initVariables();

    submit.toggleClass('d-none');
    load.toggleClass('d-none');
    btn.attr('disabled', 'disabled');

    Email.send({
        // SecureToken : "f865c869-11c9-46ad-9663-ed95629af79f",
        Host: "smtp.gmail.com",
        Username: "pimpmybuzz2022@gmail.com",
        Password: "PimpMyBuzz_2022",
        To: 'admin@pimpmybuzz.com', 
        From: data.email,
        Subject: `Inquiry from ${data.name}`,
        Body: `Phone # : ${data.phone} <br> Website : ${data.website} <br> Message : ${data.msg}`
    }).then(
        messages => {
            let status = null;
            let msgg = null;
            message = {
                'status': null,
                'msg': null
            }
            console.log(messages);
            if (messages != 'OK') {
                status = 'error';
                msgg = messages;
            } else {
                status = 'success';
                msgg = 'Email successfully sent.'
            }
            message = {
                'status': status,
                'msg': msgg
            }

            name.val('');
            email.val('');
            phone.val('');
            website.val('');
            msg.val('');

            alert_body.html('');
            alert_body.html(message.msg);
            alert.removeClass('alert-success');
            alert.removeClass('alert-danger');
            alert.addClass(message.status != 'success' ? 'alert-danger' : 'alert-success');
            alert.toggleClass('show');

            btn.removeAttr('disabled');
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

function closeAlert() {
    let alert = $('#alert-msgs');
    let alert_close = $('#alert-close');

    if (alert_close.length > 0) {
        alert_close.on('click', function () {
            alert.toggleClass('show');
        });
    }
}

function textReadMore() {
    let text = $('.trunc-content');
    if (text.length > 0) {
        text.readmore({
            speed: 2000,
            collapsedHeight: 200,
            moreLink: '<a class="read_more cmn-color2" href="#">Read more <span><i class="fas fa-caret-down"></i><span/></a>',
            lessLink: '<a class="read_less cmn-color2" href="#">Read less <span><i class="fas fa-caret-up"></i><span/></a>'
        });
    }
}