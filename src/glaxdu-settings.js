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
    },
    SingleProductImageSlider: {
        className: 'mt-15 product-dec-slider dec-slider-overlay',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false, // check how to enable this
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    },
    RelatedProductSlider: {
        className: 'producta-active',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
};

export const Image_not_found = 'https://via.placeholder.com/260x171?text=Sorry+Not+Found';
export const MAXRATINGS = 5;
export const PRODUCTS_PER_PAGE = 8;

// API urls
export const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com';
export const NEWSAPI = 'https://newsapi.org/v2';
export const NEWSAPI_KEY = 'ba634665e5fc4a9ba409bacb1ef1f862';

// server
export const PORT = 8000;
export const AUTH_SERVER_URL = `http://localhost:${PORT}`;