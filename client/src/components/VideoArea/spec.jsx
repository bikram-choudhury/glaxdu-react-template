import React from 'react';
import { shallow } from 'enzyme';
import VideoArea from './VideoArea.jsx';
import image from '../../assets/img/banner/video.jpg';

describe('VideoArea component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<VideoArea />);
    });
    it('should have background image', () => {
        const element = wrapper.find('.video-area');
        expect(element).toBeTruthy();
        const style = element.prop('style');
        const expectedVale = `url(${image})`;
        expect(style).toHaveProperty('backgroundImage', expectedVale);
    });
})