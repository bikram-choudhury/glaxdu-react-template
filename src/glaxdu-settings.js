export const sliderSettings = {
    TextSlider: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slider',
        className: 'testimonial-text-slider'
    },
    ImageSlider: {
        className: 'testimonial-image-slider',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 3,
                    centerMode: false,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 2,
                    centerMode: false,
                }
            }
        ]
    }
};

export const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com';