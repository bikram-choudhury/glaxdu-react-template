import React, { Fragment } from 'react';
import { connectAdvanced } from 'react-redux';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';
import SingleProduct from './SingleProduct/SingleProduct.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import { shallowEqual } from '@babel/types';
import { getSelectedProduct, getRelatedProducts } from '../../redux/reducers';

function ProductDetails(props) {
    const { productDetails, relatedProducts } = props;
    const descriptionInfo = {
        reviews: productDetails.reviews,
        description: productDetails.description,
        weight: productDetails.weight,
        dimensions: productDetails.dimensions,
        materials: productDetails.materials,
        otherInfo: productDetails.otherInfo
    };

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
                <ProductDescription info={descriptionInfo} />
                {
                    relatedProducts &&
                    relatedProducts.length &&
                    <RelatedProducts products={relatedProducts} />
                }

                <BrnadLogoArea />
            </ErrorBoundary>
        </Fragment>
    )
}

function selectorFactory(dispatch) {
    let result = {}

    return (nextState, nextOwnProps) => { // mapStateToProps
        const productDetails = getSelectedProduct(nextState);
        const relatedProducts = getRelatedProducts(nextState);
        const nextResult = { ...nextOwnProps, productDetails, relatedProducts };
        if (!shallowEqual(result, nextResult)) result = nextResult;
        return result;
    }
}

export default connectAdvanced(selectorFactory)(ProductDetails);