$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>50)
            $('.navbar-section').addClass('navbar-active');
        else $('.navbar-section').removeClass('navbar-active')
    });
});


// Asilbek's JS start

$('.slider-main .languages').each(function () {
    $(this).on('click', () => {
        $('.slider-main .languages').removeClass('selected')

        $(this).addClass('selected');
        let langType = $(this).attr('data-language');
        $('.slider-main .languages').each(function () {
            if ($(this).attr('data-language') == langType) {
                $(this).addClass('selected');
            } else {
                $(this).removeClass('selected');
            }
        })
    })
})


$('.burger-menu').each(function () {
    $(this).on('click', () => {
        $(this).closest('.slider-content').find('.menu__modal').removeClass('hidden');
        $('.slick-dots').addClass('hidden')
    })

    $('.menu__modal .close').each(function () {
        $(this).on('click', () => {
            $(this).closest('.menu__modal').addClass('hidden');
            $('.slick-dots').removeClass('hidden')
        })
    })
})





// Animate In
$('.aboutVR-img').on('mousemove', (e) => {

    let xAxis = ($(window).innerWidth() / 2 - e.pageX) / 30;
    let yAxis = ($(window).innerHeight() / 2 - e.pageY) / 30;

    $('.aboutVR-img img').css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(40px)`);
    $('.aboutVR-img img').css('transition', `0.1s`);

})



// Animate Out
$('.aboutVR-img').on('mouseleave', e => {
    $('.aboutVR-img img').css('transform', `rotateY(0deg) rotateX(0deg) translateZ(0px)`);
    $('.aboutVR-img img').css('transition', `0.3s`);

})


// Asilbek's JS end




console.log($(window).innerWidth(), $(window).innerHeight());
