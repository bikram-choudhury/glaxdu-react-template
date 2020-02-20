import React from 'react';
import PropTypes from 'prop-types';
import { MAXRATINGS } from '../../../glaxdu-settings';
import { Ratings } from '../../Ratings/Ratings.jsx';

export default function ProductReview(props) {
    
    const { image, name, message, rating } = props;
    return (
        <div className="review-wrapper">
            <div className="single-review">
                <div className="review-img">
                    <img src={require(`./../../../assets/img/blog/${image}`)} alt="reviewer image" />
                </div>
                <div className="review-content w-100">
                    <div className="review-top-wrap">
                        <div className="review-left">
                            <div className="review-name">
                                <h4>{name}</h4>
                            </div>
                            <Ratings className="review-rating" rating={rating} maxRating={MAXRATINGS} />
                        </div>
                        <div className="review-left">
                            <a href="#">Reply</a>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductReview.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}