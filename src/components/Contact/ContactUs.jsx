import React, { Component, Fragment } from 'react';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import ContactArea from './ContactArea/ContactArea.jsx';
import ContactInfoArea from './ContactInfoArea/ContactInfoArea.jsx';

export default class ContactUs extends Component {
    render() {
        const breadcrumbConfig = {
            title: 'Contact Us',
            subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
            templateName: 'Contact Us',
            bgImage: 'breadcrumb-bg.jpg'
        };
        return (
            <Fragment>
                <Breadcrumb {...breadcrumbConfig} />
                <ContactArea />
                <ContactInfoArea />
                <BrnadLogoArea />
            </Fragment>
        );
    }
}