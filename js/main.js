$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>50)
            $('.navbar-section').addClass('navbar-active');
        else $('.navbar-section').removeClass('navbar-active')
    })
});


// $('#myCarousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     autoplayTimeout:3000,
//     dots:false,
//     autoplayHoverPause:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });
//
// $('#iir').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots:false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         300: {
//             items: 2
//         },
//         600: {
//             items: 3
//         },
//         900:{
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// });
//
// $('#mycarouselfirst').owlCarousel({
//     loop:true,
//     margin:40,
//     autoplay:true,
//     autoplayTimeout:4000,
//     autoplayHoverPause:true,
//     dots: false,
//     responsive:{
//         0:{
//             items:3
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// });
//
// $('.owl-carousel-main').owlCarousel({
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:false,
//     dots: false,
//     responsive:{
//         0:{
//             items:3
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items: 5
//         }
//     }
// });






