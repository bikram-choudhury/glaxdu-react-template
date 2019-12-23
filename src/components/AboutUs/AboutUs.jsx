import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import { sliderSettings } from './../../glaxdu-settings';

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
                <TeacherArea />
                <FunFactArea />
                <AchievementArea />
                <BrnadLogoArea />
            </Fragment>
        )
    }
}

class ChooseArea extends Component {
    render() {
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
}

class VideoArea extends Component {
    render() {
        return (
            <div className="video-area bg-img pt-270 pb-270" style={{ backgroundImage: `url(${require('../../assets/img/banner/video.jpg')})` }}>
                <div className="video-btn-2">
                    <a className="video-popup" href="https://www.youtube.com/watch?v=sv5hK4crIRc">
                        <img className="animated" src={require('../../assets/img/icon-img/viddeo-btn.png')} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

class TeacherArea extends Component {
    render() {
        return (
            <div className="teacher-area pt-130 pb-100">
                <div className="container">
                    <div className="section-title mb-75">
                        <h2>Best <span>Teacher</span></h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div className="custom-row">
                        <div className="custom-col-5">
                            <div className="single-teacher mb-30">
                                <div className="teacher-img">
                                    <img src={require('./../../assets/img/teacher/teacher-1.jpg')} alt="" />
                                </div>
                                <div className="teacher-content-visible">
                                    <h4>Robi Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div className="teacher-content-wrap">
                                    <div className="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div className="teacher-social">
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-5">
                            <div className="single-teacher mb-30">
                                <div className="teacher-img">
                                    <img src={require('./../../assets/img/teacher/teacher-2.jpg')} alt="" />
                                </div>
                                <div className="teacher-content-visible">
                                    <h4>Jui Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div className="teacher-content-wrap">
                                    <div className="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div className="teacher-social">
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-5">
                            <div className="single-teacher mb-30">
                                <div className="teacher-img">
                                    <img src={require('./../../assets/img/teacher/teacher-3.jpg')} alt="" />
                                </div>
                                <div className="teacher-content-visible">
                                    <h4>Fawd Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div className="teacher-content-wrap">
                                    <div className="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div className="teacher-social">
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-5">
                            <div className="single-teacher mb-30">
                                <div className="teacher-img">
                                    <img src={require('./../../assets/img/teacher/teacher-4.jpg')} alt="" />
                                </div>
                                <div className="teacher-content-visible">
                                    <h4>Fawd Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div className="teacher-content-wrap">
                                    <div className="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div className="teacher-social">
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-5">
                            <div className="single-teacher mb-30">
                                <div className="teacher-img">
                                    <img src={require('./../../assets/img/teacher/teacher-5.jpg')} alt="" />
                                </div>
                                <div className="teacher-content-visible">
                                    <h4>Jui Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div className="teacher-content-wrap">
                                    <div className="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div className="teacher-social">
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="youtube-play" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FunFactArea extends Component {
    render() {
        return (
            <div className="fun-fact-area bg-img pt-130 pb-100" style={{ backgroundImage: `url(${require('./../../assets/img/bg/bg-6.jpg')})` }}>
                <div className="container">
                    <div className="section-title-3 section-shape-hm2-2 white-text text-center mb-100">
                        <h2><span>Fun</span> Fact</h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-one count-white">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/funfact-1.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">160</h2>
                                    <span>AWARD WINNING</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-two count-white">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/funfact-2.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">200</h2>
                                    <span>GRADUATE</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-three count-white">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/funfact-1.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">160</h2>
                                    <span>AWARD WINNING</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-four count-white">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/funfact-2.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">200</h2>
                                    <span>FACULTIES</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class AchievementArea extends Component {
    render() {
        return (
            <div className="achievement-area pt-130 pb-115">
                <div className="container">
                    <div className="section-title mb-75">
                        <h2>What <span>People Say</span></h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div className="testimonial-slider-wrap mt-45">
                        <Slider {...sliderSettings.TextSlider}>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../../assets/img/testimonial/testi-b1.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-6">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../../assets/img/bg/testi.png')})` }}>
                                            <div className="quote-style quote-left">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit </p>
                                            <div className="testi-info">
                                                <h5>AYESHA HOQUE</h5>
                                                <span>Students Of AMMT Department</span>
                                            </div>
                                            <div className="quote-style quote-right">
                                                <i className="fa fa-quote-right"></i>
                                            </div>
                                            <div className="testi-arrow">
                                                <img alt="" src={require('./../../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../../assets/img/testimonial/testi-b3.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-6">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../../assets/img/bg/testi.png')})` }}>
                                            <div className="quote-style quote-left">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis</p>
                                            <div className="testi-info">
                                                <h5>Tayeb Rayed</h5>
                                                <span>Students Of AMMT Department</span>
                                            </div>
                                            <div className="quote-style quote-right">
                                                <i className="fa fa-quote-right"></i>
                                            </div>
                                            <div className="testi-arrow">
                                                <img alt="" src={require('./../../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../../assets/img/testimonial/testi-b2.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-6">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../../assets/img/bg/testi.png')})` }}>
                                            <div className="quote-style quote-left">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Sed ut perspiciatis unde omnis iste natus error sit </p>
                                            <div className="testi-info">
                                                <h5>Robiul siddikee</h5>
                                                <span>Students Of AMMT Department</span>
                                            </div>
                                            <div className="quote-style quote-right">
                                                <i className="fa fa-quote-right"></i>
                                            </div>
                                            <div className="testi-arrow">
                                                <img alt="" src={require('./../../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../../assets/img/testimonial/testi-b2.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-6">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../../assets/img/bg/testi.png')})` }}>
                                            <div className="quote-style quote-left">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua. Ut enim  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit </p>
                                            <div className="testi-info">
                                                <h5>Modhu Dada</h5>
                                                <span>Students Of AMMT Department</span>
                                            </div>
                                            <div className="quote-style quote-right">
                                                <i className="fa fa-quote-right"></i>
                                            </div>
                                            <div className="testi-arrow">
                                                <img alt="" src={require('./../../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        <Slider {...sliderSettings.ImageSlider}>
                            <div className="sin-testi-image">
                                <img src={require('./../../assets/img/testimonial/testi-s2.jpg')} alt="" />
                            </div>
                            <div className="sin-testi-image">
                                <img src={require('./../../assets/img/testimonial/testi-s1.jpg')} alt="" />
                            </div>
                            <div className="sin-testi-image">
                                <img src={require('./../../assets/img/testimonial/testi-s3.jpg')} alt="" />
                            </div>
                            <div className="sin-testi-image">
                                <img src={require('./../../assets/img/testimonial/testi-s3.jpg')} alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="testimonial-text-img">
                        <img src={require('./../../assets/img/icon-img/testi-text.png')} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
