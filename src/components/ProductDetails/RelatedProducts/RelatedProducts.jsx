import React from 'react';
import Slider from "react-slick";
import { sliderSettings } from '../../../glaxdu-settings';
import SingleTableViewProduct from '../../Products/SingleTableViewProduct.jsx';

export default function RelatedProducts(props) {
    const { products } = props;
    const settings = { ...sliderSettings.RelatedProductSlider };
    
    const updateProductSlideTOShow = (productLength) => {
        switch (productLength) {
            case 1:
                settings.responsive[0].settings.slidesToShow = 1;
                settings.responsive[1].settings.slidesToShow = 1;
                settings.responsive[2].settings.slidesToShow = 1;
                break;
            case 2:
                settings.responsive[0].settings.slidesToShow = 2;
                settings.responsive[1].settings.slidesToShow = 2;
                break;
            case 3:
                settings.responsive[0].settings.slidesToShow = 3;
                break;
        }
    }
    updateProductSlideTOShow(products.length)
    return (
        <div className="related-course">
            <div className="container">
                <div className="related-title mb-45 related-mrg-small">
                    <h3>Related products</h3>
                    <p>Hempor incididunt ut labore et dolore mm, itation ullamco laboris <br />nisi ut aliquip. </p>
                </div>
                <Slider {...settings}>
                    {
                        products.map(
                            (product, index) => <SingleTableViewProduct {...product} key={index} />
                        )
                    }
                </Slider>
            </div>
        </div>

    )
}