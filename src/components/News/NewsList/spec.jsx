import React from 'react';
import { shallow } from 'enzyme';
import { NewsList } from './NewsList';

describe('NewsList component', () => {
    let props;
    beforeEach(() => {
        props = { newsTag: '', newsList: [], getNews: jest.fn() };
    });
    it('should render', () => {
        const component = shallow(<NewsList {...props} />);
        const element = component.find('.blog-all-wrap');
        expect(element).toBeTruthy();
        expect(component.state('itemsPerPage')).toBe(6);
    });
    it('getNews should get call', () => {
        shallow(<NewsList {...props} />);
        expect(props.getNews).toHaveBeenCalledTimes(1);
        expect(props.getNews).toHaveBeenCalledWith(props.newsTag);
    });
    it('should display newsTag if present', () => {
        props.newsTag = 'test';
        const component = shallow(<NewsList {...props} />);
        const element = component.find('.blog-all-wrap span.news-tag');
        const expectedValue = `Result Searched for ${props.newsTag}`;
        expect(element.text()).toEqual(expectedValue);
    });
    it('SingleNews should iterate for newList count', () => {
        props.newsList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        const component = shallow(<NewsList {...props} />);
        const element = component.find('div[data-test="SingleNews"]');
        expect(element).toHaveLength(6);        
    });
    it('Pagination should call with props', () => {
        props.newsList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        const component = shallow(<NewsList {...props} />);
        const element = component.find('Pagination');
        const paginationProps = element.props();
        const itemsPerPage = component.state('itemsPerPage');
        const totalPageCount = Math.ceil(props.newsList.length / itemsPerPage)
        const expectedProps = {
            changePageNumber: component.instance().updateCurrentPageNumber,
            currentPage: component.state('currentPage'),
            itemsPerPage,
            totalPageCount
        };
        expect(paginationProps).toStrictEqual(expectedProps);
        expect(paginationProps).toEqual(expectedProps);
    });
    it('getNews should not get call', () => {
        props.newsList = [{}];
        shallow(<NewsList {...props} />);
        expect(props.getNews).not.toHaveBeenCalled();
    });
    it('updateCurrentPageNumber should update pageNumber in state', () => {
        const component = shallow(<NewsList {...props} />);
        expect(component.state('currentPage')).toBe(1);
        const instance = component.instance();
        instance.updateCurrentPageNumber(3);
        expect(component.state('currentPage')).toBe(3);
    });

})