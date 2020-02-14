import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs.jsx';

describe('AboutUs component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AboutUs />);
    })
    it('should render', () => {
        const elements = wrapper.find('Fragment').children();
        expect(elements).toHaveLength(7);
    });
    it('Breadcrumb', ()=> {
        const breadcrumb = wrapper.find('Breadcrumb');
        const breadcrumbProps = breadcrumb.props();
        expect(breadcrumbProps.title).toBe('About Us');
    })
    it('ChooseArea', ()=> {
        const choosearea = wrapper.find('ChooseArea');
        const chooseareaProps = choosearea.props();
        expect(Object.keys(chooseareaProps)).toHaveLength(0);
    })
    it('VideoArea', ()=> {
        const videoarea = wrapper.find('VideoArea');
        const videoareaProps = videoarea.props();
        expect(Object.keys(videoareaProps)).toHaveLength(0);
    })
    it('TeacherArea', ()=> {
        const teacherarea = wrapper.find('TeacherArea');
        const teacherareaProps = teacherarea.props();
        expect(teacherareaProps.list).toHaveLength(5);
    })
    it('FunFactArea', ()=> {
        const funfactarea = wrapper.find('FunFactArea');
        const funfactareaProps = funfactarea.props();
        expect(funfactareaProps.facts).toHaveLength(4);
    })
    it('AchievementArea', ()=> {
        const achievementarea = wrapper.find('AchievementArea');
        const achievementareaProps = achievementarea.props();
        expect(achievementareaProps).toHaveProperty('contentWrap');
        expect(achievementareaProps).toHaveProperty('imgWrap');
    })
    it('BrnadLogoArea should render', ()=> {
        const brnadlogoarea = wrapper.find('BrnadLogoArea');
        const brnadlogoareaProps = brnadlogoarea.props();
        expect(Object.keys(brnadlogoareaProps)).toHaveLength(0);
    })
})