import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb component', () => {
    it('should renedr', () => {
        const props = {
            title: 'test', subTitle: '', templateName: '', bgImage: 'bg-1.jpg'
        };
        const wrapper = shallow(<Breadcrumb {...props} />);
        const element = wrapper.find('.breadcrumb-area .breadcrumb-top .container h2');
        expect(element.text()).toBe('test');
    });
    it('propTypes should throw error', () => {
        const props = { title: 'test' };
        const result = checkPropTypes(Breadcrumb.propTypes, props, 'props', Breadcrumb.name);
        expect(result).toBeDefined();
    });
    it('propTypes should not throw any error', () => {
        const props = {
            title: 'test', subTitle: '', templateName: '', bgImage: ''
        };
        const result = checkPropTypes(Breadcrumb.propTypes, props, 'props', Breadcrumb.name);
        expect(result).toBeUndefined();
    });
})