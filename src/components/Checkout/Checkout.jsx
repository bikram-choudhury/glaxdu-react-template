import React, { createRef } from 'react';
import { connect } from "react-redux";
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import BillingDetails from './BillingDetails/BillingDetails.jsx';
import OrderDetails from './OrderDetails/OrderDetails.jsx';
import { getOrderForCheckout } from '../../redux/reducers';

const Checkout = props => {
    const breadcrumbConfig = {
        title: 'Checkout',
        subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
        templateName: 'Checkout',
        bgImage: 'breadcrumb-bg-4.jpg'
    };
    const billingDetailsRef = createRef();

    const submitBillingDetailForm = (paymentType) => {
        billingDetailsRef.current.submitBillingDetailForm(paymentType);
    }

    return (
        <ErrorBoundary>
            <Breadcrumb {...breadcrumbConfig} />
            <div className="checkout-area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <BillingDetails ref={billingDetailsRef} order={props.order} />
                        </div>
                        <div className="col-lg-5">
                            <OrderDetails submitBillingDetailForm={submitBillingDetailForm} order={props.order} />
                        </div>
                    </div>
                </div>
            </div>

            <BrnadLogoArea />
        </ErrorBoundary>
    )
}

const mapStateToProps = state => ({ order: getOrderForCheckout(state) });

export default connect(mapStateToProps)(Checkout);