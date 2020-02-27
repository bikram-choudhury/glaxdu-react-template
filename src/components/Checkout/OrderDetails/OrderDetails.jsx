import React, { useState } from 'react';
import { connect } from "react-redux";
import { getOrderForCheckout } from '../../../redux/reducers';

const OrderDetails = props => {

    const { order: { items: cartItems, shipping, coupon, grossTotal = 0 } = {} } = props;

    const [paymentType, updatePaymentType] = useState('direct-bank-transefer');

    if (cartItems && cartItems.length) {
        return (
            <div className="your-order-area">
                <h3>Your order</h3>
                <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                        <div className="your-order-top">
                            <ul>
                                <li>Product</li>
                                <li>Total</li>
                            </ul>
                        </div>
                        <div className="your-order-middle">
                            <ul>
                                {
                                    cartItems.map(item => {
                                        const { productDetail: { name, price }, qty } = item;
                                        const itemTotalPrice = qty * price;
                                        return (
                                            <li key={item.id}>
                                                <span className="order-middle-left"> {name} X  {qty}</span>
                                                <span className="order-price">${itemTotalPrice}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="your-order-bottom">
                            <ul>
                                <li className="your-order-shipping">Shipping</li>
                                <li>
                                    {
                                        shipping.amount === 0 ? 'Free shipping' : `$${shipping.amount}`
                                    }
                                </li>
                            </ul>
                        </div>
                        {
                            coupon ? (
                                <div className="your-order-bottom">
                                    <ul>
                                        <li className="your-order-shipping">Coupon</li>
                                        <li>{coupon}</li>
                                    </ul>
                                </div>
                            ) : null
                        }

                        <div className="your-order-total">
                            <ul>
                                <li className="order-total">Total</li>
                                <li>${grossTotal}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="payment-method">
                        <div className="payment-accordion element-mrg">
                            <div className="panel-group" id="accordion">
                                <div className="panel payment-accordion">
                                    <div className="panel-heading" id="method-one">
                                        <h4 className="panel-title">
                                            <span
                                                className="collapsed"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                onClick={() => updatePaymentType('direct-bank-transefer')}
                                            > Direct bank transfer </span>
                                        </h4>
                                    </div>
                                    <div id="method1" className={`panel-collapse collapse ${paymentType === 'direct-bank-transefer' ? 'show' : ''}`}>
                                        <div className="panel-body">
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel payment-accordion">
                                    <div className="panel-heading" id="method-two">
                                        <h4 className="panel-title">
                                            <span
                                                className="collapsed"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                onClick={() => updatePaymentType('check-payments')}
                                            >Check payments </span>
                                        </h4>
                                    </div>
                                    <div id="method2" className={`panel-collapse collapse ${paymentType === 'check-payments' ? 'show' : ''}`}>
                                        <div className="panel-body">
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel payment-accordion">
                                    <div className="panel-heading" id="method-three">
                                        <h4 className="panel-title">
                                            <span
                                                className="collapsed"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                onClick={() => updatePaymentType('cash-on-delivery')}
                                            > Cash on delivery </span>
                                        </h4>
                                    </div>
                                    <div id="method3" className={`panel-collapse collapse ${paymentType === 'cash-on-delivery' ? 'show' : ''}`}>
                                        <div className="panel-body">
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Place-order mt-25">
                    <a className="btn-hover" href="#">Place Order</a>
                </div>
            </div>
        )
    } else {
        throw Error('Something went wrong from cart!');
    }

}

const mapStateToProps = state => ({ order: getOrderForCheckout(state) });

export default connect(mapStateToProps)(OrderDetails);