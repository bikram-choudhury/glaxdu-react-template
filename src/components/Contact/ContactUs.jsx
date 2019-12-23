import React, { Component, Fragment } from 'react';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';

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

class ContactArea extends Component {
    render() {
        return (
            <div className="contact-area pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="contact-map mr-70">
                                <div id="map"></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-form">
                                <div className="contact-title mb-45">
                                    <h2>Stay <span>Connected</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis do eiusmod tempor indunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <form id="contact-form" action="http://demo.hasthemes.com/glaxdu-v1/glaxdu/assets/php/mail.php" method="post">
                                    <input name="name" placeholder="Name*" type="text" />
                                    <input name="email" placeholder="Email*" type="email" />
                                    <input name="subject" placeholder="Subject*" type="text" />
                                    <textarea name="message" placeholder="Message"></textarea>
                                    <button className="submit btn-style" type="submit">SEND MESSAGE</button>
                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ContactInfoArea extends Component {
    render() {
        return (
            <div className="contact-info-area bg-img pt-180 pb-140 default-overlay"
                style={{ backgroundImage: `url(${require('../../assets/img/bg/contact-info.jpg')})` }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-contact-info mb-30 text-center">
                                <div className="contact-info-icon">
                                    <span><i className="fa fa-calendar-o"></i></span>
                                </div>
                                <p>Uttara, Dhaka, Bangladesh <br />Opposite site Of Yellow.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-contact-info mb-30 text-center">
                                <div className="contact-info-icon">
                                    <span><i className="fa fa-calendar-o"></i></span>
                                </div>
                                <div className="contact-info-phn">
                                    <div className="info-phn-title">
                                        <span>Phone : </span>
                                    </div>
                                    <div className="info-phn-number">
                                        <p>+091111111111</p>
                                        <p>+091111111111</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-contact-info mb-30 text-center">
                                <div className="contact-info-icon">
                                    <span><i className="fa fa-calendar-o"></i></span>
                                </div>
                                <a href="#">education@email.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}