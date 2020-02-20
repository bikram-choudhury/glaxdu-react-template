import React, { useState } from 'react';
import { connectAdvanced } from 'react-redux';
import { Ratings } from '../../Ratings/Ratings.jsx';
import { MAXRATINGS } from '../../../glaxdu-settings';
import { getSelectedProductId } from '../../../redux/reducers';
import { saveProductReview } from '../../../redux/actions/products.action';

function AddProductReview(props) {
    const [rating, setRating] = useState(0);
    const [reviewerName, updateReviewerName] = useState('');
    const [reviewerEmail, updateReviewerEmail] = useState('');
    const [reviewerMessage, updateReviewerMessage] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const review = {
            name: reviewerName,
            email: reviewerEmail,
            message: reviewerMessage,
            rating: rating,
            image: 'no-image.png'
        };
        props.saveReview(review, props.productId);
    }
    return (
        <div className="ratting-form-wrapper pl-50 ratting-nagative-mrg">
            <h3>Add a Review</h3>
            <div className="ratting-form">
                <form onSubmit={handleOnSubmit}>
                    <div className="star-box">
                        <span>Your rating:</span>
                        <Ratings rating={rating} maxRating={MAXRATINGS} handleClick={(count) => setRating(count)} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="rating-form-style mb-10">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    value={reviewerName}
                                    onChange={(e) => updateReviewerName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rating-form-style mb-10">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={reviewerEmail}
                                    onChange={(e) => updateReviewerEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                                <textarea
                                    name="Your Review"
                                    placeholder="Message"
                                    value={reviewerMessage}
                                    onChange={(e) => updateReviewerMessage(e.target.value)} />
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function selectorFactory(dispatch) {
    const saveReview = (review, productId) => dispatch(saveProductReview(review, productId));

    return (nextState) => {
        const productId = getSelectedProductId(nextState);
        return { productId, saveReview };
    }
}

export default connectAdvanced(selectorFactory)(AddProductReview);