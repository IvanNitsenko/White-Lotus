$(document).ready(() => {

    $('#masters-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        customPaging : function(slider, i) {
            $(slider.$slides[i]).data();
            return '<a>'+(i+1)+'</a>';
        },
        responsive: [
            {
                breakpoint: 1241,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('#gallery-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1241,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });


    $("#faq-often").accordion({
        collapsible: true,
        active: false
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.test-popup-link').magnificPopup({
        type: 'image'
    });

    $('.open-modal').click(() => {
        $('#spa-form').css('display', 'flex');
    });
    $('#spa-form').click((e) => {
        if (e.target.id === 'spa-form') {
            $('#spa-form').hide();
        }
    });
    $('.cancel').click((e) => {
            $('#spa-form').hide();

    });

    $('#faq-button-action').click(() => {
        let faqPhone = $('#faq-phone');
        let faq = $('#faq');
        if (faqPhone.val()) {
        $('#faq-seldom-action').css('display', 'none');
        $('#faq-seldom-given').css('display', 'flex');
        faq.css('background-image', 'url("images/faq-background-2.png")');
    } else {
            $('#faq-error').css('display', 'block');
            faqPhone.css('border-color', 'red');
        }
    });

    $('#reserved').on('click', function () {
        $('.form-error').hide();
        $('.input').css('borderColor', 'rgb(114, 17, 99)');
        let name = $('#name');
        let phone = $('#phone');
        let procedure = $('#procedure');
        let time = $('#time');
        let hasError = false;

        if (!name.val()) {
            name.siblings('.form-error').show();
            name.css('borderColor', 'red');
            hasError = true;
        }

        if (procedure.val() === 'hidden') {
            procedure.siblings('.form-error').show();
            procedure.css('borderColor', 'red');
            hasError = true;
        }

        if (!phone.val()) {
            phone.siblings('.form-error').show();
            phone.css('borderColor', 'red');
            hasError = true;
        }

        if (!time.val()) {
            time.siblings('.form-error').show();
            time.css('borderColor', 'red');
            hasError = true;
        }

        if (!hasError) {
            $('#form-answer').css('display', 'block');
            $('#spa-form-container').css('display', 'none');
            /*
            $.ajax({
                method: "POST",
                url: '',
                data: {name: name.val(), phone: phone.val(), procedure: procedure.val(), time: time.val()}
            })
                .done(function (message) {
                    console.log(message);
                    if (message.success) {
                        $('form').replaceWith( "<div id='newDiv'>Спасибо за вашу заявку. Мы скоро свяжемся с Вами!</div>" );
                    } else {
                        $('form').replaceWith( "<div id='newDiv'>Возникла ошибка, позвоните нам и запишитесь по телефону.</div>" );
                    }
                }); */
        }
    })

    $('#burger').click(() => {
        var headerContainer = $('#header-container');
        headerContainer.toggleClass('menu-open');
        $('#header-logo').css('display', 'none');
        headerContainer.css('margin', '0');
        $('#logo-close').css('display', 'block');
    });

    $('#header-container #menu .menu-item, #logo-close').click(() => {
        var headerContainer = $('#header-container');
        headerContainer.removeClass('menu-open');
        $('#header-logo').css('display', 'flex');
        $('#logo-close').css('display', 'none');
        headerContainer.css('margin', '0 auto');
    });

});

