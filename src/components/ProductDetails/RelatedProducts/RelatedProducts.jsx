import React from 'react';
import Slider from "react-slick";
import { sliderSettings } from '../../../glaxdu-settings';

export default function RelatedProducts(props) {
    return (
        <div className="related-course">
            <div className="container">
                <div className="related-title mb-45 related-mrg-small">
                    <h3>Related products</h3>
                    <p>Hempor incididunt ut labore et dolore mm, itation ullamco laboris <br />nisi ut aliquip. </p>
                </div>
                <Slider {...sliderSettings.RelatedProductSlider}>
                    <div className="product-wrap">
                        <div className="product-img">
                            <a href="single-product.html"><img src={require('./../../../assets/img/product/pro-1.jpg')} alt="" /></a>
                            <span>Sale</span>
                            <div className="product-action">
                                <ul>
                                    <li><a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a></li>
                                    <li><a title="Compare" href="#"><i className="fa fa-random"></i></a></li>
                                    <li><a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="pro-title-rating-wrap">
                                <div className="product-title">
                                    <h3><a href="single-product.html">Marker Pen</a></h3>
                                </div>
                                <div className="product-rating">
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                </div>
                            </div>
                            <div className="pro-category-price">
                                <span className="pro-category">Drawing</span>
                                <span className="pro-price">$10</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img">
                            <a href="single-product.html"><img src={require('./../../../assets/img/product/pro-2.jpg')} alt="" /></a>
                            <div className="product-action">
                                <ul>
                                    <li><a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a></li>
                                    <li><a title="Compare" href="#"><i className="fa fa-random"></i></a></li>
                                    <li><a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="pro-title-rating-wrap">
                                <div className="product-title">
                                    <h3><a href="single-product.html">Color Box</a></h3>
                                </div>
                                <div className="product-rating">
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                </div>
                            </div>
                            <div className="pro-category-price">
                                <span className="pro-category">Drawing</span>
                                <span className="pro-price">$20</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img">
                            <a href="single-product.html"><img src={require('./../../../assets/img/product/pro-3.jpg')} alt="" /></a>
                            <span>Sale</span>
                            <div className="product-action">
                                <ul>
                                    <li><a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a></li>
                                    <li><a title="Compare" href="#"><i className="fa fa-random"></i></a></li>
                                    <li><a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="pro-title-rating-wrap">
                                <div className="product-title">
                                    <h3><a href="single-product.html">Color Pencil</a></h3>
                                </div>
                                <div className="product-rating">
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                </div>
                            </div>
                            <div className="pro-category-price">
                                <span className="pro-category">Drawing</span>
                                <span className="pro-price">$30</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img">
                            <a href="single-product.html"><img src={require('./../../../assets/img/product/pro-4.jpg')} alt="" /></a>
                            <div className="product-action">
                                <ul>
                                    <li><a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a></li>
                                    <li><a title="Compare" href="#"><i className="fa fa-random"></i></a></li>
                                    <li><a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="pro-title-rating-wrap">
                                <div className="product-title">
                                    <h3><a href="single-product.html">Toy mobile</a></h3>
                                </div>
                                <div className="product-rating">
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                </div>
                            </div>
                            <div className="pro-category-price">
                                <span className="pro-category">Drawing</span>
                                <span className="pro-price">$40</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img">
                            <a href="single-product.html"><img src={require('./../../../assets/img/product/pro-2.jpg')} alt="" /></a>
                            <span>Sale</span>
                            <div className="product-action">
                                <ul>
                                    <li><a title="Add To Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a></li>
                                    <li><a title="Compare" href="#"><i className="fa fa-random"></i></a></li>
                                    <li><a title="Wishlist" href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="pro-title-rating-wrap">
                                <div className="product-title">
                                    <h3><a href="single-product.html">Color Pencil</a></h3>
                                </div>
                                <div className="product-rating">
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                    <i className="zmdi zmdi-star"></i>
                                </div>
                            </div>
                            <div className="pro-category-price">
                                <span className="pro-category">Drawing</span>
                                <span className="pro-price">$50</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

    )
}