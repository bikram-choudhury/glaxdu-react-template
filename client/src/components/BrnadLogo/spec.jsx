import React from 'react';
import { shallow } from 'enzyme';
import BrnadLogoArea from './BrnadLogoArea.jsx';

describe('BrnadLogoArea component', () => {
    it('Should render', () => {
        const component = shallow(<BrnadLogoArea />);
        const element = component.find('.brand-logo-area');
        expect(element).toBeTruthy();
        const carousalElem = component.find('ReactOwlCarousel');
        // to test OwlCarousel element -> find ReactOwlCarousel in jsdom
        expect(carousalElem).toHaveLength(1);
    })
})