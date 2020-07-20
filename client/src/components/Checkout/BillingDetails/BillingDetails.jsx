import React, { forwardRef, createRef, useImperativeHandle, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { getAccessToken } from '../../../redux/reducers';
import ShippingForm from '../ShippingForm/ShippingForm.jsx';
import { saveOrderForCheckout } from '../../../redux/actions/checkout.action';

const BillingDetails = forwardRef((props, ref) => {
    const { accessToken, order, saveOrderForCheckout } = props;

    const history = useHistory();
    const billingFormRef = createRef();
    const shippingFormRef = createRef();

    const [isShippingAddressEnabled, toggleShippingAddress] = useState(false);

    const orderForCheckout = { ...order };

    const toggleRegistration = (event) => {
        console.log(event.target.checked);
    };
    const navigateToHome = () => {
        history.push('/admin/home');
    };
    const billingFormOnsubmit = (formData) => {
        if (formData.billing) {
            orderForCheckout.billingAddress = { ...formData.billing };
        }
        if (formData.shipping) {
            orderForCheckout.shippingAddress = { ...formData.shipping };
        }

        if (orderForCheckout.billingAddress && isShippingAddressEnabled && orderForCheckout.shippingAddress) {
            saveOrderForCheckout(orderForCheckout, { navigateToHome });
        } else if (orderForCheckout.billingAddress && !isShippingAddressEnabled) {
            saveOrderForCheckout(orderForCheckout, { navigateToHome });
        }
    };

    useImperativeHandle(ref, () => {
        return {
            submitBillingDetailForm(paymentType) {
                orderForCheckout.paymentType = paymentType;
                billingFormRef.current.submitShippingDetailForm();

                if (isShippingAddressEnabled) {
                    shippingFormRef.current.submitShippingDetailForm();
                }
            }
        }
    })
    return (
        <div className="billing-info-wrap">
            <ShippingForm ref={billingFormRef} billingFormOnsubmit={billingFormOnsubmit} Type="billing" Title="Billing Details" />
            {
                !accessToken ? (
                    <Fragment>
                        <div className="checkout-account mb-50">
                            <input className="checkout-toggle2" type="checkbox" onChange={toggleRegistration} />
                            <span>Create an account?</span>
                        </div>
                        <div className="checkout-account-toggle open-toggle2 mb-30">
                            <input placeholder="Username" type="email" />
                            <input placeholder="Password" type="password" />
                            <button className="btn-hover checkout-btn" type="submit">register</button>
                        </div>
                    </Fragment>
                ) : null
                // Login part is not done here as in my case after login only user can visit this page
            }
            <div className="checkout-account mt-25">
                <input
                    className="checkout-toggle"
                    type="checkbox"
                    checked={isShippingAddressEnabled}
                    onChange={(e) => toggleShippingAddress(e.target.checked)}
                />
                <span>Ship to a different address?</span>
            </div>
            {
                isShippingAddressEnabled ? (
                    <div className="different-address open-toggle mt-30">
                        <ShippingForm ref={shippingFormRef} billingFormOnsubmit={billingFormOnsubmit} Type="shipping" Title="Shipping Details" />
                    </div>
                ) : null
            }

        </div>
    )
});

const mapStateToProps = (state) => ({ accessToken: getAccessToken(state) });
const mapDispatchToProps = { saveOrderForCheckout };

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(BillingDetails);