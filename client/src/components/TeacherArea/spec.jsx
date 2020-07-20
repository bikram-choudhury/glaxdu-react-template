import React from 'react';
import { shallow } from 'enzyme';
import TeacherArea from './TeacherArea';

describe('TeacherArea component', () => {
    let wrapper;
    const teacherList = [{
        empId: 1,
        name: "Robi Khan",
        designation: "Lecturer",
        description: "Love For All, Hatred For None.",
        image: 'teacher-1.jpg'
    }, {
        empId: 2,
        name: "Jui Khan",
        designation: "Lecturer",
        description: "Change the world by being yourself.",
        image: 'teacher-2.jpg'
    }];

    it('should have background image', () => {
        wrapper = shallow(<TeacherArea />);
        const element = wrapper.find('.teacher-area');
        expect(element).toBeTruthy();
        const children = element.find('.custom-row').children();
        expect(children).toHaveLength(0);
    });
    it('should render 2 teacher section', () => {
        wrapper = shallow(<TeacherArea list={teacherList} />);
        const elements = wrapper.find('.teacher-area .custom-row');
        expect(elements.children()).toHaveLength(teacherList.length);
        const socialBtns = wrapper.find('SocialButtons');
        expect(socialBtns.length).toBe(teacherList.length);
    })
})