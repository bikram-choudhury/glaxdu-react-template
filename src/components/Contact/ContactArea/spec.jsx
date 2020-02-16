import React from 'react';
import { shallow } from 'enzyme';
import ContactArea from './ContactArea.jsx';

describe('ContactArea component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ContactArea />);
    })
    it('should render', () => {
        const element = wrapper.find('.contact-area');
        expect(element).toBeTruthy();
    })
})