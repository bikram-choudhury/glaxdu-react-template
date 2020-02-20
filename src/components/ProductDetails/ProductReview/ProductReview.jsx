import React from 'react';
import PropTypes from 'prop-types';
import { MAXRATINGS } from '../../../glaxdu-settings';
import { Ratings } from '../../Ratings/Ratings.jsx';

export default function ProductReview(props) {
    const { reviewerImage, reviewerName, review, rating } = props;
    return (
        <div className="review-wrapper">
            <div className="single-review">
                <div className="review-img">
                    <img src={require(`./../../../assets/img/${reviewerImage}`)} alt="reviewer image" />
                </div>
                <div className="review-content">
                    <div className="review-top-wrap">
                        <div className="review-left">
                            <div className="review-name">
                                <h4>{reviewerName}</h4>
                            </div>
                            <Ratings rating={rating} maxRating={MAXRATINGS} />
                        </div>
                        <div className="review-left">
                            <a href="#">Reply</a>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p>{review}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductReview.propTypes = {
    reviewerImage: PropTypes.string.isRequired,
    reviewerName: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}