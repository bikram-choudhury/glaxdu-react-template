import React from 'react';
import { shallow } from 'enzyme';
import News from './News.jsx';

describe('News component', () => {
    let component;
    beforeAll(() => {
        component = shallow(<News />);
    })
    it('should render', () => {
        const breadcrumb = component.find('Breadcrumb');
        expect(breadcrumb).toBeTruthy();
        const element = component.find('.event-area');
        expect(element).toBeTruthy();
        const newslist = component.find('NewsList');
        expect(newslist).toBeTruthy();
        const newssideBar = component.find('NewsSideBar');
        expect(newssideBar).toBeTruthy();
    });
    it('Breadcrumb should call with props', () => {
        const breadcrumb = component.find('Breadcrumb');
        const props = breadcrumb.props();
        expect(Object.keys(props)).not.toHaveLength(0);
    })
})