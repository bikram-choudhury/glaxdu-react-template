import React from 'react';
import { shallow } from 'enzyme';
import ChooseArea from './ChooseArea.jsx';
import image from '../../assets/img/bg/bg-8.jpg';

describe('ChooseArea componenent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ChooseArea />);
    });
    it('should have background imgage', () => {
        const element = wrapper.find(".choose-area");
        expect(element).toBeTruthy();
        const style = element.prop('style');
        const expectedVale = `url(${image})`
        expect(style).toHaveProperty('backgroundImage', expectedVale);
    })
})