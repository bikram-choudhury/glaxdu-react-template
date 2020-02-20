import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductReview from '../ProductReview/ProductReview.jsx';
import AddProductReview from '../AddProductReview/AddProductReview.jsx';

export default function ProductDescription(props) {
    const [tabView, updateTabView] = useState('description');
    const { info } = props;

    return (
        <div className="description-review-area pb-120">
            <div className="container">
                <div className="description-review-wrapper">
                    <div className="description-review-topbar nav">
                        <a
                            className={tabView === 'description' ? 'active' : ''}
                            onClick={() => updateTabView('description')}
                        >
                            Description
                        </a>
                        <a
                            className={tabView === 'additional-information' ? 'active' : ''}
                            onClick={() => updateTabView('additional-information')}
                        >
                            Additional information
                        </a>
                        <a
                            className={tabView === 'reviews' ? 'active' : ''}
                            onClick={() => updateTabView('reviews')}
                        >
                            Reviews
                        </a>
                    </div>
                    <div className="tab-content description-review-bottom">
                        <div className={`tab-pane ${tabView === 'description' ? 'active' : ''}`}>
                            <div className="product-description-wrapper">
                                <p>{info.description}</p>
                            </div>
                        </div>
                        <div className={`tab-pane ${tabView === 'additional-information' ? 'active' : ''}`}>
                            <div className="product-anotherinfo-wrapper">
                                <ul>
                                    <li><span>Weight</span> {info.weight + ' g'} </li>
                                    <li><span>Dimensions</span>{info.dimensions} </li>
                                    <li><span>Materials</span> {info.materials}</li>
                                    <li><span>Other Info</span> {info.otherInfo}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`tab-pane ${tabView === 'reviews' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-lg-7">
                                    {
                                        info.reviews &&
                                            info.reviews.length ? (
                                                info.reviews.map(
                                                    (review, index) => <ProductReview key={index} {...review} />
                                                )
                                            ) : (
                                                <h1>Be the first one to give feedback on our product</h1>
                                            )
                                    }
                                </div>
                                <div className="col-lg-5">
                                    <AddProductReview />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProductDescription.propTypes = {
    info: PropTypes.shape({
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired
            })
        ),
        description: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        dimensions: PropTypes.string.isRequired,
        materials: PropTypes.arrayOf(PropTypes.string).isRequired,
        otherInfo: PropTypes.string.isRequired
    })
};