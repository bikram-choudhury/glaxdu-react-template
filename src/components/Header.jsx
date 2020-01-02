import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from "./TopHeader/TopHeader.jsx";
import { AdminRoutes } from './../routes.js';

export default class Header extends Component {
    constructor() {
        super();
        this.stickyHeaderRef = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = (event) => {
        var scroll = window.scrollY;
        if (this.stickyHeaderRef) {

            if (scroll < 200) {
                this.stickyHeaderRef.classList.remove('stick');
            } else {
                this.stickyHeaderRef.classList.add('stick');
            }
        }
    }
    render() {

        return (
            <header className="header-area">
                <TopHeader />
                <div className="header-bottom sticky-bar clearfix" ref={holder => this.stickyHeaderRef = holder}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-4">
                                <div className="logo">
                                    <a href="index.html">
                                        <img alt="" src={require('./../assets/img/logo/logo.png')} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-6 col-8">
                                <div className="menu-cart-wrap">
                                    <div className="main-menu">
                                        <nav>
                                            <ul>
                                                {
                                                    AdminRoutes.map((route, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link to={route.layout + route.path}>{route.name}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="cart-search-wrap">
                                        <div className="cart-wrap">
                                            <button className="icon-cart">
                                                <i className="fa fa-cart-plus"></i>
                                                <span className="count-style">02</span>
                                            </button>
                                            <div className="shopping-cart-content">
                                                <ul>
                                                    <li className="single-shopping-cart">
                                                        <div className="shopping-cart-img">
                                                            <a href="#"><img alt="" src={require('./../assets/img/cart/cart-1.png')} /></a>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="#">Color Box </a></h4>
                                                            <h6>Qty: 02</h6>
                                                            <span>$260.00</span>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <a href="#"><i className="fa fa-times-circle"></i></a>
                                                        </div>
                                                    </li>
                                                    <li className="single-shopping-cart">
                                                        <div className="shopping-cart-img">
                                                            <a href="#"><img alt="" src={require('./../assets/img/cart/cart-2.png')} /></a>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="#">Color Box </a></h4>
                                                            <h6>Qty: 02</h6>
                                                            <span>$260.00</span>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <a href="#"><i className="fa fa-times-circle"></i></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-total">
                                                    <h4>Shipping : <span>$20.00</span></h4>
                                                    <h4>Total : <span className="shop-total">$260.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-btn">
                                                    <a className="default-btn btn-hover" href="cart.html">view cart</a>
                                                    <a className="default-btn btn-hover" href="checkout.html">checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-search">
                                            <button className="search-toggle">
                                                <i className="fa fa-search"></i>
                                            </button>
                                            <div className="search-content">
                                                <form action="#">
                                                    <input type="text" placeholder="Search" />
                                                    <button>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-area">
                            <div className="mobile-menu">
                                <nav id="mobile-menu-active">
                                    <ul className="menu-overflow">
                                        <li><a href="index.html">HOME</a>
                                            <ul>
                                                <li><a href="index.html">home version 1</a></li>
                                                <li><a href="index-2.html">home version 2</a></li>
                                                <li><a href="index-3.html">home version 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">About</a></li>
                                        <li><a href="shop.html">Shop</a>
                                            <ul>
                                                <li><a href="#">Categories 01</a>
                                                    <ul>
                                                        <li><a href="shop.html">bag</a></li>
                                                        <li><a href="shop.html">Pen</a></li>
                                                        <li><a href="shop.html">Erasers</a></li>
                                                        <li><a href="shop.html">Glue sticks</a></li>
                                                        <li><a href="shop.html">Lunchbox </a></li>
                                                        <li><a href="shop.html">Pencil box </a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Categories 02</a>
                                                    <ul>
                                                        <li><a href="shop.html">bag</a></li>
                                                        <li><a href="shop.html">Pen</a></li>
                                                        <li><a href="shop.html">Erasers</a></li>
                                                        <li><a href="shop.html">Glue sticks</a></li>
                                                        <li><a href="shop.html">Lunchbox </a></li>
                                                        <li><a href="shop.html">Pencil box </a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Categories 03</a>
                                                    <ul>
                                                        <li><a href="shop.html">bag</a></li>
                                                        <li><a href="shop.html">Pen</a></li>
                                                        <li><a href="shop.html">Erasers</a></li>
                                                        <li><a href="shop.html">Glue sticks</a></li>
                                                        <li><a href="shop.html">Lunchbox </a></li>
                                                        <li><a href="shop.html">Pencil box </a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Categories 04</a>
                                                    <ul>
                                                        <li><a href="shop.html">bag</a></li>
                                                        <li><a href="shop.html">Pen</a></li>
                                                        <li><a href="shop.html">Erasers</a></li>
                                                        <li><a href="shop.html">Glue sticks</a></li>
                                                        <li><a href="shop.html">Lunchbox </a></li>
                                                        <li><a href="shop.html">Pencil box </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="course.html">course page</a></li>
                                                <li><a href="event.html">event page</a></li>
                                                <li><a href="shop.html">shop page</a></li>
                                                <li><a href="course-details.html">course details</a></li>
                                                <li><a href="event-details.html">event details</a></li>
                                                <li><a href="single-product.html">single product</a></li>
                                                <li><a href="cart.html">cart page</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="login-register.html">login / register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">About us</a></li>
                                        <li><a href="blog.html">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-details.html">blog details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}
