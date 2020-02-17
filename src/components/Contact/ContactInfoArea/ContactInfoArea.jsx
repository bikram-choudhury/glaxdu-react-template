import React from 'react';

export default function ContactInfoArea(props) {
    return (
        <div className="contact-info-area bg-img pt-180 pb-140 default-overlay"
            style={{ backgroundImage: `url(${require('../../../assets/img/bg/contact-info.jpg')})` }} >
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
    )
}