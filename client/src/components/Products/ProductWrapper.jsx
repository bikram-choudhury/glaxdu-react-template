import React, {Fragment} from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb.jsx";
import BrnadLogoArea from "../BrnadLogo/BrnadLogoArea.jsx";
import ProductListContainer from "./ProductListContainer.jsx";

export default function ProductWrapper() {
    const breadcrumbConfig = {
        title: 'Products Grid',
        subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
        templateName: 'Product List Page',
        bgImage: 'breadcrumb-bg-4.jpg'
    };
    return (
        <Fragment>
            <Breadcrumb {...breadcrumbConfig} />
            <ProductListContainer />
            <BrnadLogoArea />
        </Fragment>
    )
}