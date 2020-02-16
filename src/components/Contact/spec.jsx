import React from 'react';
import { shallow } from 'enzyme';
import ContactUs from './ContactUs.jsx';

describe('ContactUs component', () => {
    it('should render', () => {
        const wrapper = shallow(<ContactUs />);
        expect(wrapper).toBeTruthy();
        expect(wrapper.find('ContactArea')).toBeTruthy();
        expect(wrapper.find('BrnadLogoArea')).toBeTruthy();
    });
    it('Breadcrumb should have props', () => {
        const component = shallow(<ContactUs />);
        const elem = component.find('Breadcrumb');
        expect(Object.keys(elem.props())).toHaveLength(4);
    })
})