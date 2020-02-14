import React, { Component, Fragment } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import ChooseArea from '../ChooseArea/ChooseArea.jsx';
import VideoArea from '../VideoArea/VideoArea.jsx';
import TeacherArea from '../TeacherArea/TeacherArea.jsx';
import FunFactArea from '../FunFactArea/FunFactArea.jsx';
import AchievementArea from '../AchievementArea/AchievementArea.jsx';

const teachers = [{
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
}, {
    empId: 3,
    name: "Fawd Khan",
    designation: "Lecturer",
    description: "Every moment is a fresh beginning.",
    image: 'teacher-3.jpg'
}, {
    empId: 4,
    name: "Chunky Pandey",
    designation: "Lecturer",
    description: "Die with memories, not dreams.",
    image: 'teacher-4.jpg'
}, {
    empId: 5,
    name: "Tom And Jerry",
    designation: "Lecturer",
    description: "Never regret anything that made you smile.",
    image: 'teacher-5.jpg'
}];
const funFacts = [{
    image: "icon-img/funfact-1.png",
    label: 'AWARD WINNING',
    count: 160,
    className: "count-one"
}, {
    image: "icon-img/funfact-2.png",
    label: 'GRADUATE',
    count: 200,
    className: "count-two"
}, {
    image: "icon-img/funfact-1.png",
    label: 'AWARD WINNING',
    count: 160,
    className: "count-three"
}, {
    image: "icon-img/funfact-2.png",
    label: 'FACULTIES',
    count: 200,
    className: "count-four"
}];

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
}, {
    imgSrc: 'testimonial/testi-b2.jpg',
    bgImg: 'bg/testi.png',
    description: 'Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit',
    name: 'Robiul siddikee',
    title: 'Students Of AMMT Department',
    iconImg: 'icon-img/testi-icon.png'
}, {
    imgSrc: 'testimonial/testi-b2.jpg',
    bgImg: 'bg/testi.png',
    description: 'Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit',
    name: 'Modhu Dada',
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
    }, {
        title: 'testi-s3',
        img: 'testimonial/testi-s3.jpg'
    }, {
        title: 'testi-s3',
        img: 'testimonial/testi-s3.jpg'
    }
];

// TODO: teachers, funFacts, textSliderWrap, imageSliderWrap should fetch from server

export default class AboutUs extends Component {
    render() {
        const breadcrumbConfig = {
            title: 'About Us',
            subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
            templateName: 'About Page',
            bgImage: 'breadcrumb-bg.jpg'
        };
        return (
            <Fragment>
                <Breadcrumb {...breadcrumbConfig} />
                <ChooseArea />
                <VideoArea />
                <TeacherArea list={teachers} />
                <FunFactArea facts={funFacts} />
                <AchievementArea contentWrap={textSliderWrap} imgWrap={imageSliderWrap} />
                <BrnadLogoArea />
            </Fragment>
        )
    }
}

