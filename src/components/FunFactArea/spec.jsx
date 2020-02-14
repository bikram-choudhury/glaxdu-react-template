import React from 'react';
import { shallow } from 'enzyme';
import FunFactArea from './FunFactArea.jsx';
import image from './../../assets/img/bg/bg-6.jpg';

describe('FunFactArea component', () => {
    let wrapper;
    const funFacts = [{
        image: "icon-img/funfact-1.png",
        label: 'AWARD WINNING',
        count: 160,
        className: "count-one"
    }, {
        image: "icon-img/funfact-2.png",
        label: 'GRADUATE',
        count: 200,
        className: "count-two"
    }];
    beforeEach(() => {
        wrapper = shallow(<FunFactArea />);
    });
    it('should render', () => {
        const element = wrapper.find('.fun-fact-area');
        expect(element).toBeTruthy();
        const style = element.prop('style');
        const expectedVale = `url(${image})`;
        expect(style).toHaveProperty('backgroundImage', expectedVale);
    });
    it('no content should render inside count-holder', () => {
        const elements = wrapper.find('.fun-fact-area .count-holder');
        expect(elements.children()).toHaveLength(0);
    });
    it('content should render inside count-holder', () => {
        wrapper = shallow(<FunFactArea facts={funFacts} />);
        const elements = wrapper.find('.fun-fact-area .count-holder');
        expect(elements.children()).toHaveLength(funFacts.length);
    });
})