import React from 'react';
import { Ratings } from '../Ratings/Ratings.jsx';
import { MAXRATINGS } from '../../glaxdu-settings';

export default function SingleListViewProduct(props) {
    const { images, name, rating, category, price, description } = props;
    return (
        <div className="shop-list-wrap mb-30">
            <div className="shop-list-img">
                <a href="single-product.html">
                    <img src={require(`./../../assets/img/product/${images[0]}`)} alt={name} />
                </a>
            </div>
            <div className="shop-list-content">
                <h4><a href="single-product.html">{name}</a></h4>
                <span>${price}</span>
                <p>{description}</p>
                <Ratings rating={rating} maxRating={MAXRATINGS} />
                <div className="product-action-list">
                    <ul>
                        <li>
                            <a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                        </li>
                        <li>
                            <a title="Compare" href="#"><i className="fa fa-random"></i></a>
                        </li>
                        <li>
                            <a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                        </li>
                        <li>
                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}