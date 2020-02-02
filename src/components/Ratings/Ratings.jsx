import React from 'react';

export const Ratings = (props) => {
    const { rating, maxRating } = props;
    const children = Array(maxRating).fill(null)
        .map((_, i) => i + 1)
        .map((count, index) => {
            if (count <= rating) {
                return (<i key={index} className="zmdi zmdi-star"></i>);
            } else {
                return (<i key={index} className="zmdi zmdi-star-outline"></i>);
            }
        });
    return (
        <div className="product-rating">
            {children}
        </div>
    )
}