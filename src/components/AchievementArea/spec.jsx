import React from 'react';
import { shallow } from 'enzyme';
import image from './../../assets/img/bg/bg-6.jpg';
import AchievementArea from './AchievementArea.jsx';
import { sliderSettings } from '../../glaxdu-settings';

describe('AchievementArea component', () => {
    let wrapper;
    const textSliderWrap = [{
        imgSrc: 'testimonial/testi-b1.jpg',
        bgImg: 'bg/testi.png',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit',
        name: 'AYESHA HOQUE',
        title: 'Students Of AMMT Department',
        iconImg: 'icon-img/testi-icon.png'
    }, {
        imgSrc: 'testimonial/testi-b3.jpg',
        bgImg: 'bg/testi.png',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit',
        name: 'Tayeb Rayed',
        title: 'Students Of AMMT Department',
        iconImg: 'icon-img/testi-icon.png'
    }];
    const imageSliderWrap = [
        {
            title: 'testi-s2',
            img: 'testimonial/testi-s2.jpg'
        }, {
            title: 'testi-s1',
            img: 'testimonial/testi-s1.jpg'
        }
    ];
    beforeEach(() => {
        wrapper = shallow(<AchievementArea />);
    });
    it('should render', () => {
        const element = wrapper.find('.achievement-area');
        expect(element).toBeTruthy();
    });
    it('Slider should call 2 times', () => {
        const elements = wrapper.find('.achievement-area .testimonial-slider-wrap Slider');
        expect(elements).toHaveLength(2);
    });
    it('testi-content-wrap should have 2 length', () => {
        wrapper = shallow(<AchievementArea contentWrap={textSliderWrap} />);
        const elements = wrapper.find('.achievement-area .testimonial-slider-wrap .testi-content-wrap');
        expect(elements).toHaveLength(textSliderWrap.length);
    });
    
    it('sin-testi-image should have 2 length', () => {
        wrapper = shallow(<AchievementArea imgWrap={imageSliderWrap} />);
        const elements = wrapper.find('.achievement-area .testimonial-slider-wrap .sin-testi-image');
        expect(elements).toHaveLength(imageSliderWrap.length);
    });

    it('sin-testi-image should default ImageSlider properties', () => {
        wrapper = shallow(<AchievementArea />);
        const slider = wrapper.find('Slider').at(1);
        const sliderProps = slider.props();
        expect(sliderProps.slidesToShow).toBe(sliderSettings.ImageSlider.slidesToShow);
    });
})