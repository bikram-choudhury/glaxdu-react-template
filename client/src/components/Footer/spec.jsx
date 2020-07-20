import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.jsx';
import image from './../../assets/img/bg/bg-4.jpg';

describe('Footer componenent', () => {
    let wrapper, mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        wrapper = shallow(<Footer />);
    });
    it('should have background imgage', () => {
        const element = wrapper.find(".footer-top");
        expect(element).toBeTruthy();
        const style = element.prop('style');
        const expectedVale = `url(${image})`
        expect(style).toHaveProperty('backgroundImage', expectedVale);
    })
})