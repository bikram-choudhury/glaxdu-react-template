import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from './ProductDetails.jsx';
import SingleProduct from './SingleProduct/SingleProduct';
import ProductDescription from './ProductDescription/ProductDescription';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';

describe('ProductDetails component', () => {
    it('should render', () => {
        const component = shallow(<ProductDetails />);
        const children = component.find('ErrorBoundary').children();
        expect(children.containsMatchingElement(<SingleProduct />)).toBeTruthy();
        expect(children.containsMatchingElement(<ProductDescription />)).toBeTruthy();
        expect(children.containsMatchingElement(<RelatedProducts />)).toBeTruthy();
        expect(children.containsMatchingElement(<BrnadLogoArea />)).toBeTruthy();
        // not done as previous expects because it will get mount and throws error for undefined props
        expect(children.find('Breadcrumb')).toBeTruthy();
        const breadcrumbProps = component.find('Breadcrumb').props();
        expect(breadcrumbProps).toHaveProperty('templateName');
    });
});