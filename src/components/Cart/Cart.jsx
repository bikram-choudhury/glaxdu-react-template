import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import { getCartItems } from '../../redux/reducers';
import { removeItem } from '../../redux/actions/cart.action';
import { processOrderForCheckout } from '../../redux/actions/checkout.action';

function Cart(props) {

    const breadcrumbConfig = {
        title: 'Cart',
        subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
        templateName: 'Cart',
        bgImage: 'breadcrumb-bg-4.jpg'
    };

    let totalCartItemAmount = 0;
    let shippingTotal = 0;

    const [cartItems, updateCartItems] = useState([...props.cartItems]);
    // props.cartItems Added to state to update its internal values
    useEffect(() => {
        updateCartItems(props.cartItems);
    }, [props.cartItems]);
    // props.cartItems Added to useEffect to detect any changes to props.cartItems length

    const [shippingInfo, updateShippingInfo] = useState({ type: 'free', amount: 0 });
    const [coupon, updateCoupon] = useState({ value: '', isValid: false });

    const onChangeItemQty = (qty, cartId) => {
        if (qty <= 0) {
            // show a model to remove the item from cart
        } else if (!isNaN(qty)) {
            const tangentCart = [...cartItems];
            const selectedItem = tangentCart.find(item => item.id === cartId);
            selectedItem.qty = qty;
            updateCartItems(tangentCart);
        }
    }

    const updateShippingDetail = amount => event => {
        updateShippingInfo({ type: event.target.value, amount });
    }

    const checkCouponValidity = (event) => {
        event.preventDefault();
        const prevCoupon = coupon;
        updateCoupon({ ...prevCoupon, isValid: true });
        alert(`'${coupon.value}' is successfully validated`);
        // Do a POST request to server to check coupon validation 
    }

    const proceedToCheckout = (event) => {
        event.preventDefault();
        const orderForCheckout = {
            items: cartItems,
            coupon: coupon.value,
            shipping: shippingInfo
        }
        props.processOrderForCheckout(orderForCheckout);
        props.history.push('/admin/checkout');
    }

    return (
        <ErrorBoundary>
            <Breadcrumb {...breadcrumbConfig} />
            <div className="cart-main-area pt-130 pb-130">
                {
                    cartItems.length ? (
                        <div className="container">
                            <h3 className="cart-page-title">Your cart items</h3>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div className="table-content table-responsive cart-table-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Until Price</th>
                                                    <th>Qty</th>
                                                    <th>Subtotal</th>
                                                    <th>action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cartItems.map((item, index) => {
                                                        const { productDetail } = item;
                                                        totalCartItemAmount += (item.qty * productDetail.price);
                                                        shippingTotal += item.shipping.amount;
                                                        return (
                                                            <tr key={index}>
                                                                <td className="product-thumbnail">
                                                                    <span>
                                                                        <img
                                                                            src={require(`./../../assets/img/product/${productDetail.images[0]}`)}
                                                                            alt={productDetail.name}
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td className="product-name">
                                                                    <span>{productDetail.name}</span>
                                                                </td>
                                                                <td className="product-price-cart">
                                                                    <span className="amount">${productDetail.price}</span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <div className="cart-plus-minus">
                                                                        <div
                                                                            className="dec qtybutton"
                                                                            onClick={() => onChangeItemQty(item.qty - 1, item.id)}
                                                                        >-</div>
                                                                        <input
                                                                            className="cart-plus-minus-box"
                                                                            type="text"
                                                                            name="qtybutton"
                                                                            value={item.qty}
                                                                            onChange={
                                                                                (e) => {
                                                                                    const qty = parseInt(e.target.value);
                                                                                    onChangeItemQty(qty, item.id)
                                                                                }
                                                                            } />
                                                                        <div
                                                                            className="inc qtybutton"
                                                                            onClick={() => onChangeItemQty(item.qty + 1, item.id)}
                                                                        >+</div>
                                                                    </div>
                                                                </td>
                                                                <td className="product-subtotal">${item.qty * productDetail.price}</td>
                                                                <td className="product-remove">
                                                                    {/* <span><i className="fa fa-pencil"></i></span> */}
                                                                    <span
                                                                        onClick={
                                                                            () => props.removeItem(item.id)
                                                                        }
                                                                    ><i className="fa fa-times"></i></span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="cart-shiping-update-wrapper">
                                                <div className="cart-shiping-update">
                                                    <Link to="/admin/products">Continue Shopping</Link>
                                                </div>
                                                <div className="cart-clear">
                                                    <button>Clear Shopping Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="cart-tax">
                                                <div className="title-wrap">
                                                    <h4 className="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                                                </div>
                                                <div className="tax-wrapper">
                                                    <p>Enter your destination to get a shipping estimate.</p>
                                                    <div className="tax-select-wrapper">
                                                        <div className="tax-select">
                                                            <label>* Country</label>
                                                            <select className="email s-email s-wid">
                                                                <option>Bangladesh</option>
                                                                <option>Albania</option>
                                                                <option>Åland Islands</option>
                                                                <option>Afghanistan</option>
                                                                <option>Belgium</option>
                                                            </select>
                                                        </div>
                                                        <div className="tax-select">
                                                            <label>* Region / State</label>
                                                            <select className="email s-email s-wid">
                                                                <option>Bangladesh</option>
                                                                <option>Albania</option>
                                                                <option>Åland Islands</option>
                                                                <option>Afghanistan</option>
                                                                <option>Belgium</option>
                                                            </select>
                                                        </div>
                                                        <div className="tax-select">
                                                            <label>* Zip/Postal Code</label>
                                                            <input type="text" />
                                                        </div>
                                                        <button className="cart-btn-2" type="submit">Get A Quote</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="discount-code-wrapper">
                                                <div className="title-wrap">
                                                    <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                                                </div>
                                                <div className="discount-code">
                                                    <p>Enter your coupon code if you have one.</p>
                                                    <form onSubmit={checkCouponValidity}>
                                                        <input
                                                            type="text"
                                                            required
                                                            name="coupon"
                                                            value={coupon.value}
                                                            onChange={e => {
                                                                const prevCoupon = coupon;
                                                                updateCoupon({ ...prevCoupon, value: e.target.value });
                                                            }}
                                                        />
                                                        <button className="cart-btn-2" type="submit">Apply Coupon</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="grand-totall">
                                                <div className="title-wrap">
                                                    <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                                </div>
                                                <h5>Total products <span>${totalCartItemAmount}</span></h5>
                                                <div className="total-shipping">
                                                    <h5>Shipping</h5>
                                                    <ul>
                                                        <li>
                                                            <input
                                                                type="radio"
                                                                name="shippingType"
                                                                value="free"
                                                                checked={shippingInfo.type === 'free'}
                                                                onChange={updateShippingDetail(0)}
                                                            /> Free <span>$0.00</span>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="radio"
                                                                name="shippingType"
                                                                value="standard"
                                                                checked={shippingInfo.type === 'standard'}
                                                                onChange={updateShippingDetail(20)}
                                                            /> Standard <span>$20.00</span>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="radio"
                                                                name="shippingType"
                                                                value="express"
                                                                checked={shippingInfo.type === 'express'}
                                                                onChange={updateShippingDetail(30)}
                                                            /> Express <span>$30.00</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {
                                                    coupon.isValid ? (
                                                        <div className="coupon-code">
                                                            <ul>
                                                                <li>
                                                                    Applied Coupon<span>{coupon.value}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    ) : null
                                                }

                                                <h4 className="grand-totall-title">
                                                    Grand Total
                                                <span>
                                                        ${totalCartItemAmount + shippingTotal + shippingInfo.amount}
                                                    </span>
                                                </h4>
                                                <span className="checkout-btn" onClick={proceedToCheckout}>Proceed to Checkout</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div className="container empty-cart">
                                <div className="text-center">
                                    <h1>Your cart is empty</h1>
                                    <Link to="/admin/products">Continue Shopping</Link>
                                </div>

                            </div>
                        )
                }

            </div>
            <BrnadLogoArea />
        </ErrorBoundary>
    )
}
const mapStateToProps = (state) => {
    const cartItems = getCartItems(state);
    return { cartItems };
}
const mapDispatchToProps = { removeItem, processOrderForCheckout };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);