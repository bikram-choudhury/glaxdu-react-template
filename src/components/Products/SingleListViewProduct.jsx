import React from 'react';
import { Ratings } from '../Ratings/Ratings.jsx';
import { MAXRATINGS } from '../../glaxdu-settings';

export default function SingleListViewProduct(props) {
    const { images, name, rating, price, description } = props;
    return (
        <div className="shop-list-wrap mb-30">
            <div className="shop-list-img">
                <span>
                    <img src={require(`./../../assets/img/product/${images[0]}`)} alt={name} />
                </span>
            </div>
            <div className="shop-list-content">
                <h4><a href="single-product.html">{name}</a></h4>
                <span>${price}</span>
                <p>{description}</p>
                <Ratings rating={rating} maxRating={MAXRATINGS} />
                <div className="product-action-list">
                    <ul>
                        <li>
                            <span title="Add To Cart"><i className="fa fa-cart-arrow-down"></i></span>
                        </li>
                        <li>
                            <span title="Compare"><i className="fa fa-random"></i></span>
                        </li>
                        <li>
                            <span title="Wishlist"><i className="fa fa-heart-o"></i></span>
                        </li>
                        <li>
                            <span title="Quick View" data-toggle="modal" data-target="#exampleModal">
                                <i className="fa fa-eye"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}