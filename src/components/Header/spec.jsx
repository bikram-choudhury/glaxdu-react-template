import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from './Header.jsx';
import TopHeader from '../TopHeader/TopHeader.jsx';

describe('Header componenent', () => {
    let wrapper, instance, mockFunc;
    const cartItems = [{
        productDetail: {
            images: ['pro-1.jpg'], id: 1, name: 'name', price: 10, sku: '0019'
        },
        qty: 1,
        size: '',
        color: '',
        shipping: 0
    }]
    const map = {};
    beforeEach(() => {
        mockFunc = jest.fn();
        wrapper = shallow(<Header cartItems={[]} />);
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
    it('showCartPanel should update on click of `icon-cart` button', () => {
        expect(instance.state.showCartPanel).toBeFalsy();
        const element = wrapper.find(".icon-cart");
        element.simulate('click');
        expect(instance.state.showCartPanel).toBeTruthy();
    });
    it('should show `shopping-cart-content` ', () => {
        wrapper = shallow(<Header cartItems={cartItems} />);
        const element = wrapper.find(".icon-cart");
        element.simulate('click');
        const cartElem = wrapper.find('.shopping-cart-content');
        expect(cartElem).toHaveClassName('active');
        const singleShoppingElems = cartElem.find('ul li');
        expect(singleShoppingElems).toHaveLength(cartItems.length);
    });
    it('should `removeItem` get called on cart item delete', () => {
        wrapper = shallow(<Header cartItems={cartItems} removeItem={mockFunc} />);
        const localInstance = wrapper.instance();
        localInstance.setState({ showCartPanel: true });
        const singleCartElem = wrapper.find('.shopping-cart-delete');
        singleCartElem.simulate('click');
        expect(mockFunc).toHaveBeenCalledTimes(1);
        expect(mockFunc).toHaveBeenCalledWith(cartItems[0].id);
    });
    it('should `shop-total` have total cart amount', () => {
        wrapper = shallow(<Header cartItems={cartItems} removeItem={mockFunc} />);
        const localInstance = wrapper.instance();
        localInstance.setState({ showCartPanel: true });
        const expectedTotal = cartItems.reduce(
            (accumulator, currentValue) => {
                return accumulator + (currentValue.qty * currentValue.productDetail.price);
            }, 0); // 0: initialValue for accumulator if not provides then accumulator initialValue will be array's 1st value
        const shopTotalElem = wrapper.find('.shop-total');
        expect(shopTotalElem.text()).toBe(`$${expectedTotal}`);
    });
})