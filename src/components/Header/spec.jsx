import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';
import TopHeader from '../TopHeader/TopHeader.jsx';

fdescribe('Header componenent', () => {
    let wrapper, mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        wrapper = shallow(<Header />);
    });
    it('should work', () => {
        const element = wrapper.find(".header-area");
        expect(element).toBeTruthy();
    });
    it('should render TopHeader', () => {
        const element = wrapper.find(TopHeader);
        expect(element).toHaveLength(1);
    })
})