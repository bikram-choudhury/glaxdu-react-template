import React, { Component } from 'react';
import { Ratings } from '../Ratings/Ratings.jsx';
import { MAXRATINGS } from '../../glaxdu-settings';

export default function SingleTableViewProduct(props) {
    const { images, name, rating, category, price } = props;
    return (
        <div className="product-wrap mb-30">
            <div className="product-img">
                <a href="single-product.html">
                    <img src={require(`./../../assets/img/product/${images[0]}`)} alt={name} />
                </a>
                <span>Sale</span>
                <div className="product-action">
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
            <div className="product-content">
                <div className="pro-title-rating-wrap">
                    <div className="product-title">
                        <h3><a href="single-product.html">{name}</a></h3>
                    </div>
                    <Ratings rating={rating} maxRating={MAXRATINGS} />
                </div>
                <div className="pro-category-price">
                    <span className="pro-category">{category}</span>
                    <span className="pro-price">${price}</span>
                </div>
            </div>
        </div>
    )
}