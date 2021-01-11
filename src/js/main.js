$(document).ready(function() {
    $('.welcome__slider').slick({
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
});