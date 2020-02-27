import React from 'react';
import { connect } from "react-redux";
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import BillingDetails from './BillingDetails/BillingDetails.jsx';
import OrderDetails from './OrderDetails/OrderDetails.jsx';

const Checkout = props => {
    const breadcrumbConfig = {
        title: 'Checkout',
        subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
        templateName: 'Checkout',
        bgImage: 'breadcrumb-bg-4.jpg'
    };

    return (
        <ErrorBoundary>
            <Breadcrumb {...breadcrumbConfig} />
            <div className="checkout-area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <BillingDetails />
                        </div>
                        <div className="col-lg-5">
                            <OrderDetails />
                        </div>
                    </div>
                </div>
            </div>

            <BrnadLogoArea />
        </ErrorBoundary>
    )
}

export default Checkout;