import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header.jsx';
import TopHeader from '../TopHeader/TopHeader.jsx';

fdescribe('Header componenent', () => {
    let wrapper, instance, mockFunc;
    const map = {};
    beforeEach(() => {
        mockFunc = jest.fn();
        wrapper = shallow(<Header />);
        instance = wrapper.instance();
        
        window.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        });
    });
    it('should work', () => {
        const element = wrapper.find(".header-area");
        expect(element).toBeTruthy();
        expect(instance.stickyHeaderRef).toBeTruthy();
    });
    it('should render TopHeader', () => {
        const element = wrapper.find(TopHeader);
        expect(element).toHaveLength(1);
    });
    it('should call remove class fun on stickyHeaderRef', () => {
        window.scrollY = 100;
        instance.stickyHeaderRef = {
            classList: {
                remove: jest.fn(),
                add: jest.fn()
            }
        }
        const event = {};
        instance.handleScroll(event);
        expect(instance.stickyHeaderRef.classList.remove).toBeCalledTimes(1);
        expect(instance.stickyHeaderRef.classList.remove).toHaveBeenCalledWith('stick');
    });
    it('should call add class fun on stickyHeaderRef', () => {
        window.scrollY = 201;
        instance.stickyHeaderRef = {
            classList: {
                remove: jest.fn(),
                add: jest.fn()
            }
        }
        const event = {};
        instance.handleScroll(event);
        expect(instance.stickyHeaderRef.classList.add).toBeCalledTimes(1);
        expect(instance.stickyHeaderRef.classList.add).toHaveBeenCalledWith('stick');
    });
    it('should call handleScroll method', () => {
        instance.handleScroll = jest.fn();
        instance.componentDidMount();
        map.scroll({});        
        expect(instance.handleScroll).toHaveBeenCalled();
    });
    it('should render route list', () => {
        const element = wrapper.find(".main-menu nav ul li");
        expect(element.length).toEqual(5);
    });
})