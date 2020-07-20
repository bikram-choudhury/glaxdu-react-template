import React from 'react';
import { shallow } from 'enzyme';
import { TopHeader } from './TopHeader.jsx';

describe('TopHeader component', () => {

    it('should render', () => {
        const wrapper = shallow(<TopHeader />);
        const element = wrapper.find(".header-top");
        expect(element).toBeTruthy();
    });
    it('should have logout button', () => {
        const wrapper = shallow(<TopHeader accessToken="test" />);
        const element = wrapper.find(".logout");
        expect(element).toHaveLength(1);
    });
    it('should have login button', () => {
        const wrapper = shallow(<TopHeader accessToken="" />);
        const logout = wrapper.find(".logout");
        expect(logout).toHaveLength(0);
        const login = wrapper.find(".login");
        expect(login).toHaveLength(1);
        const register = wrapper.find(".register");
        expect(register).toHaveLength(1);
    });

});