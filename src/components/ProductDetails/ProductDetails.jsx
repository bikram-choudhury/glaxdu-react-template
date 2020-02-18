import React, { Fragment } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';
import SingleProduct from './SingleProduct/SingleProduct.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';

export default function ProductDetails(props) {
    const breadcrumbConfig = {
        title: 'Product Details',
        subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
        templateName: 'Product Details',
        bgImage: 'breadcrumb-bg-4.jpg'
    };
    return (
        <Fragment>
            <ErrorBoundary>
                <Breadcrumb {...breadcrumbConfig} />
                <SingleProduct />
                <ProductDescription />
                <RelatedProducts />
                <BrnadLogoArea />
            </ErrorBoundary>
        </Fragment>
    )
}