import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TopHeader from "./../TopHeader/TopHeader.jsx";
import { AdminRoutes } from './../../routes.js';
import { getCartItems } from '../../redux/reducers';
import { removeItem } from '../../redux/actions/cart.action';

export class Header extends Component {
    constructor(props) {
        super();
        this.stickyHeaderRef = React.createRef();
        this.state = {
            showCartPanel: false
        }
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
        const { showCartPanel } = this.state;
        const { cartItems } = this.props;

        let cartItemCount = cartItems.length;
        let totalCartItemAmount = 0;
        let shippingTotal = 0;

        return (
            <header className="header-area">
                <TopHeader />
                <div className="header-bottom sticky-bar clearfix" ref={holder => this.stickyHeaderRef = holder}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-4">
                                <div className="logo">
                                    <a href="index.html">
                                        <img alt="" src={require('./../../assets/img/logo/logo.png')} />
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
                                                        if (route.name) {
                                                            return (
                                                                <li key={index}>
                                                                    <Link to={route.layout + route.path}>{route.name}</Link>
                                                                </li>
                                                            );
                                                        } else {
                                                            return null;
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="cart-search-wrap">
                                        <div className="cart-wrap">
                                            <button
                                                className="icon-cart"
                                                onClick={
                                                    () => this.setState({ showCartPanel: !showCartPanel })
                                                }
                                            >
                                                <i className="fa fa-cart-plus"></i>
                                                <span className="count-style">{cartItemCount}</span>
                                            </button>
                                            {
                                                cartItems && cartItems.length ? (
                                                    <div
                                                        className={`shopping-cart-content ${showCartPanel ? 'active' : ''}`}
                                                    >
                                                        <ul>
                                                            {
                                                                cartItems.map(
                                                                    (item, index) => {
                                                                        const { productDetail } = item;
                                                                        totalCartItemAmount += (item.qty * productDetail.price);
                                                                        shippingTotal += item.shipping;

                                                                        return (
                                                                            <li className="single-shopping-cart" key={index}>
                                                                                <div className="shopping-cart-img">
                                                                                    <a href="#">
                                                                                        <img alt="" src={require(`./../../assets/img/product/${productDetail.images[0]}`)} />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="shopping-cart-title">
                                                                                    <h4>
                                                                                        <span>{productDetail.name}</span>
                                                                                    </h4>
                                                                                    <h6>Qty: {item.qty}</h6>
                                                                                    <span>${productDetail.price}</span>
                                                                                </div>
                                                                                <div
                                                                                    className="shopping-cart-delete"
                                                                                    onClick={
                                                                                        () => this.props.removeItem(item.id)
                                                                                    }
                                                                                >
                                                                                    <span><i className="fa fa-times-circle"></i></span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    }
                                                                )
                                                            }
                                                        </ul>
                                                        <div className="shopping-cart-total">
                                                            {/* To enable Shipping charges choose type of 
                                                                Shipping at full cart view */}
                                                            {
                                                                shippingTotal ? (
                                                                    <h4>Shipping : <span>${shippingTotal}</span></h4>
                                                                ) : null
                                                            }
                                                            <h4>Total : <span className="shop-total">${totalCartItemAmount}</span></h4>
                                                        </div>
                                                        <div className="shopping-cart-btn">
                                                            <Link className="default-btn btn-hover" to="cart">view cart</Link>
                                                            <Link className="default-btn btn-hover" to="checkout">checkout</Link>
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
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

const mapStateToProps = (state) => {
    const cartItems = getCartItems(state);
    cartItems.sort((prev, next) => next.id - prev.id);
    return { cartItems };
}
const mapDispatchToProps = { removeItem };
export default connect(mapStateToProps, mapDispatchToProps)(Header);