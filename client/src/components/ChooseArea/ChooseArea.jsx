import React from 'react';

export default function ChooseArea() {
    return (
        <div className="choose-area bg-img pt-90" style={{ backgroundImage: `url(${require('../../assets/img/bg/bg-8.jpg')})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="about-chose-us pt-120">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-about-chose-us mb-95">
                                        <div className="about-choose-img">
                                            <img src={require('../../assets/img/icon-img/service-9.png')} alt="" />
                                        </div>
                                        <div className="about-choose-content text-light-blue">
                                            <h3>Scholarship Facility</h3>
                                            <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-about-chose-us mb-95 about-negative-mrg">
                                        <div className="about-choose-img">
                                            <img src={require('../../assets/img/icon-img/service-10.png')} alt="" />
                                        </div>
                                        <div className="about-choose-content text-yellow">
                                            <h3>Best Teacher </h3>
                                            <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-about-chose-us mb-95">
                                        <div className="about-choose-img">
                                            <img src={require('../../assets/img/icon-img/service-11.png')} alt="" />
                                        </div>
                                        <div className="about-choose-content text-blue">
                                            <h3>Library & Book Store</h3>
                                            <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-about-chose-us mb-95 about-negative-mrg">
                                        <div className="about-choose-img">
                                            <img src={require('../../assets/img/icon-img/service-12.png')} alt="" />
                                        </div>
                                        <div className="about-choose-content text-green">
                                            <h3>25 Years Of Experience</h3>
                                            <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="about-img">
                            <img src={require('../../assets/img/banner/about.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}