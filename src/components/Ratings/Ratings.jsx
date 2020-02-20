import React from 'react';
import { MAXRATINGS } from '../../glaxdu-settings';

export const Ratings = (props) => {
    const { rating, maxRating, handleClick } = props;
    const children = Array(maxRating).fill(null)
        .map((_, i) => i + 1)
        .map((count, index) => {
            if (count <= rating) {
                return (<i key={index} className="zmdi zmdi-star" onClick={() => handleClick(index + 1)}></i>);
            } else {
                return (<i key={index} className="zmdi zmdi-star-outline" onClick={() => handleClick(index + 1)}></i>);
            }
        });
    return (
        <div className="product-rating">
            {children}
        </div>
    )
}

Ratings.defaultProps = {
    rating: 0,
    maxRating: MAXRATINGS,
    handleClick: () => { }
}