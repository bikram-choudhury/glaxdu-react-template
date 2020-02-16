import React from 'react';
import { shallow } from 'enzyme';
import ContactInfoArea from './ContactInfoArea.jsx';

describe('ContactInfoArea component', () => {
    it('should render', () => {
        const wrapper = shallow(<ContactInfoArea />);
        const element = wrapper.find('.contact-info-area');
        expect(element).toBeTruthy();
    })
})