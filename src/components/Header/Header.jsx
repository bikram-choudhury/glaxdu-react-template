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
                                    <Link to="/">
                                        <img alt="" src={require('./../../assets/img/logo/logo.png')} />
                                    </Link>
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
                                                                        shippingTotal += item.shipping.amount;

                                                                        return (
                                                                            <li className="single-shopping-cart" key={index}>
                                                                                <div className="shopping-cart-img">
                                                                                    <span>
                                                                                        <img alt="" src={require(`./../../assets/img/product/${productDetail.images[0]}`)} />
                                                                                    </span>
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
                                                                ) : (<h4>Shipping : <span>Free shipping</span></h4>)
                                                            }
                                                            <h4>Total : <span className="shop-total">${totalCartItemAmount}</span></h4>
                                                        </div>
                                                        <div className="shopping-cart-btn">
                                                            <Link className="default-btn btn-hover" to="cart">view cart</Link>
                                                            {/* <Link className="default-btn btn-hover" to="checkout">checkout</Link> */}
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
                                        <li><Link to="/">HOME</Link>
                                            <ul>
                                                <li><Link to="/">home version 1</Link></li>
                                                <li><span>home version 2</span></li>
                                                <li><span>home version 3</span></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/about-us">About</Link></li>
                                        <li><Link to="/products">Shop</Link>
                                            <ul>
                                                <li><span>Categories 01</span>
                                                    <ul>
                                                        <li><Link to="/products">bag</Link></li>
                                                        <li><Link to="/products">Pen</Link></li>
                                                        <li><Link to="/products">Erasers</Link></li>
                                                        <li><Link to="/products">Glue sticks</Link></li>
                                                        <li><Link to="/products">Lunchbox </Link></li>
                                                        <li><Link to="/products">Pencil box </Link></li>
                                                    </ul>
                                                </li>
                                                <li><span>Categories 02</span>
                                                    <ul>
                                                        <li><Link to="/products">bag</Link></li>
                                                        <li><Link to="/products">Pen</Link></li>
                                                        <li><Link to="/products">Erasers</Link></li>
                                                        <li><Link to="/products">Glue sticks</Link></li>
                                                        <li><Link to="/products">Lunchbox </Link></li>
                                                        <li><Link to="/products">Pencil box </Link></li>
                                                    </ul>
                                                </li>
                                                <li><span>Categories 03</span>
                                                    <ul>
                                                        <li><Link to="/products">bag</Link></li>
                                                        <li><Link to="/products">Pen</Link></li>
                                                        <li><Link to="/products">Erasers</Link></li>
                                                        <li><Link to="/products">Glue sticks</Link></li>
                                                        <li><Link to="/products">Lunchbox </Link></li>
                                                        <li><Link to="/products">Pencil box </Link></li>
                                                    </ul>
                                                </li>
                                                <li><span>Categories 04</span>
                                                    <ul>
                                                        <li><Link to="/products">bag</Link></li>
                                                        <li><Link to="/products">Pen</Link></li>
                                                        <li><Link to="/products">Erasers</Link></li>
                                                        <li><Link to="/products">Glue sticks</Link></li>
                                                        <li><Link to="/products">Lunchbox </Link></li>
                                                        <li><Link to="/products">Pencil box </Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><span>Pages</span>
                                            <ul>
                                                <li><span>course page</span></li>
                                                <li><span>event page</span></li>
                                                <li><span>shop page</span></li>
                                                <li><span>course details</span></li>
                                                <li><span>event details</span></li>
                                                <li><span>single product</span></li>
                                                <li><span>cart page</span></li>
                                                <li><span>checkout</span></li>
                                                <li><span>wishlist</span></li>
                                                <li><span>login / register</span></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/about-us">About us</Link></li>
                                        <li><Link to="/news">News</Link>
                                            <ul>
                                                <li><Link to="/news">blog</Link></li>
                                                <li><span>blog details</span></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact-us">Contact</Link></li>
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
    return { cartItems };
}
const mapDispatchToProps = { removeItem };
export default connect(mapStateToProps, mapDispatchToProps)(Header);