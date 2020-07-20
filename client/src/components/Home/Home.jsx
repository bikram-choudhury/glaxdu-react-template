import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './../../jquery-loader';
import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";
import { sliderSettings } from './../../glaxdu-settings';
import FreeRegisterationForm from './FreeRegisterationForm/FreeRegisterationForm.jsx';
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <SliderArea />
                </ErrorBoundary>

                <ChooseUs />
                <AboutUs />

                <ErrorBoundary>
                    <CourseArea />
                </ErrorBoundary>

                <ErrorBoundary>
                    <AchivementArea />
                </ErrorBoundary>

                <FreeRegisterationForm />

                <ErrorBoundary>
                    <TeacherArea />
                </ErrorBoundary>

                <EventArea />
                <BlogArea />
            </Fragment>
        )
    }
}

// slider-area required JS plugin for display
class SliderArea extends Component {
    render() {
        return (
            <div className="slider-area">
                <OwlCarousel
                    className="slider-active owl-carousel"
                    margin={10}
                    loop={true}
                    nav={false}
                    autoplay={false}
                    autoplayTimeout={5000}
                    animateOut={'fadeOut'}
                    animateIn={'fadeIn'}
                    item={1}
                    responsive={{
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }}
                >
                    <div className="single-slider slider-height-1 bg-img" style={{ backgroundImage: `url(${require('./../../assets/img/slider/slider-1.jpg')})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                                    <div className="slider-content slider-animated-1 pt-230">
                                        <h1 className="animated">MakeYour Own World</h1>
                                        <p className="animated">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                        <div className="slider-btn">
                                            <Link className="animated default-btn btn-green-color" to="about-us">ABOUT US</Link>
                                            <Link className="animated default-btn btn-white-color" to="contact-us">CONTACT US</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-single-img slider-animated-1">
                                <img className="animated" src={require('./../../assets/img/slider/single-slide-1.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="single-slider slider-height-1 bg-img" style={{ backgroundImage: `url(${require('./../../assets/img/slider/slider-2.jpg')})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                                    <div className="slider-content slider-animated-1 pt-230">
                                        <h1 className="animated">MakeYour Own World</h1>
                                        <p className="animated">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                        <div className="slider-btn">
                                            <Link className="animated default-btn btn-green-color" to="about-us">ABOUT US</Link>
                                            <Link className="animated default-btn btn-white-color" to="contact-us">CONTACT US</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-single-img slider-animated-1">
                                <img className="animated" src={require('./../../assets/img/slider/single-slide-2.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div >

        )
    }
}

class ChooseUs extends Component {
    render() {
        return (
            <div className="choose-us section-padding-1">
                <div className="container-fluid">
                    <div className="row no-gutters choose-negative-mrg">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-choose-us choose-bg-light-blue">
                                <div className="choose-img">
                                    <img className="animated" src={require('./../../assets/img/icon-img/service-1.png')} alt="" />
                                </div>
                                <div className="choose-content">
                                    <h3>Scholarship Facility</h3>
                                    <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-choose-us choose-bg-yellow">
                                <div className="choose-img">
                                    <img className="animated" src={require('./../../assets/img/icon-img/service-2.png')} alt="" />
                                </div>
                                <div className="choose-content">
                                    <h3>Scholarship Facility</h3>
                                    <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-choose-us choose-bg-blue">
                                <div className="choose-img">
                                    <img className="animated" src={require('./../../assets/img/icon-img/service-3.png')} alt="" />
                                </div>
                                <div className="choose-content">
                                    <h3>Scholarship Facility</h3>
                                    <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-choose-us choose-bg-green">
                                <div className="choose-img">
                                    <img className="animated" src={require('./../../assets/img/icon-img/service-4.png')} alt="" />
                                </div>
                                <div className="choose-content">
                                    <h3>Scholarship Facility</h3>
                                    <p>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-content">
                                <div className="section-title section-title-green mb-30">
                                    <h2>About <span>Us</span></h2>
                                    <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                                </div>
                                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven  iam, quis nostrud exer citation ullamco laboris nisi ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <div className="about-btn mt-45">
                                    <Link className="default-btn" to="about-us">ABOUT US</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-img default-overlay">
                                <img src={require('./../../assets/img/banner/banner-1.jpg')} alt="" />
                                <a className="video-btn video-popup" href="https://www.youtube.com/watch?v=sv5hK4crIRc">
                                    <img className="animated" src={require('./../../assets/img/icon-img/video.png')} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

class CourseArea extends Component {
    render() {
        return (
            <div className="course-area bg-img pt-130 pb-10" style={{ backgroundImage: `url(${require('./../../assets/img/bg/bg-1.jpg')})` }}>
                <div className="container">
                    <div className="section-title mb-75">
                        <h2> <span>Our</span> Courses</h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <OwlCarousel
                        className="course-slider-active nav-style-1 owl-carousel"
                        loop={true}
                        nav={true}
                        navText={[`<i class="fa fa-angle-left"></i>`, `<i class="fa fa-angle-right"></i>`]}
                        navElement={'div'}
                        dots={false}
                        animateOut={'fadeOut'}
                        animateIn={'fadeIn'}
                        item={4}
                        responsive={{
                            0: {
                                items: 1
                            },
                            768: {
                                items: 2
                            },
                            992: {
                                items: 3
                            },
                            1000: {
                                items: 4
                            }
                        }}
                    >
                        <div className="single-course">
                            <div className="course-img">
                                <Link to="/news">
                                    <img className="animated" src={require('./../../assets/img/course/course-1.jpg')} alt="news" />
                                </Link>
                                <span>Addmission Going On</span>
                            </div>
                            <div className="course-content">
                                <h4><span>Apparel Manufacturing</span></h4>
                                <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
                            </div>
                            <div className="course-position-content">
                                <div className="credit-duration-wrap">
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-diamond"></i>
                                        <span>Credits : 125</span>
                                    </div>
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-clock-o"></i>
                                        <span>Duration : 4yrs</span>
                                    </div>
                                </div>
                                <div className="course-btn">
                                    <span className="default-btn">APPLY NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <span>
                                    <img className="animated" src={require('./../../assets/img/course/course-2.jpg')} alt="course-2" />
                                </span>
                            </div>
                            <div className="course-content">
                                <h4><span>Grphic Design & Multimedia</span></h4>
                                <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
                            </div>
                            <div className="course-position-content">
                                <div className="credit-duration-wrap">
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-diamond"></i>
                                        <span>Credits : 125</span>
                                    </div>
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-clock-o"></i>
                                        <span>Duration : 4yrs</span>
                                    </div>
                                </div>
                                <div className="course-btn">
                                    <span className="default-btn">APPLY NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <span>
                                    <img className="animated" src={require('./../../assets/img/course/course-3.jpg')} alt="course-3" />
                                </span>
                            </div>
                            <div className="course-content">
                                <h4><span>Computer Engineering</span></h4>
                                <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
                            </div>
                            <div className="course-position-content">
                                <div className="credit-duration-wrap">
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-diamond"></i>
                                        <span>Credits : 125</span>
                                    </div>
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-clock-o"></i>
                                        <span>Duration : 4yrs</span>
                                    </div>
                                </div>
                                <div className="course-btn">
                                    <span className="default-btn">APPLY NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <span>
                                    <img className="animated" src={require('./../../assets/img/course/course-4.jpg')} alt="course-4" />
                                </span>
                                <span>Post Graduation Course</span>
                            </div>
                            <div className="course-content">
                                <h4><span>Fashion & Technology</span></h4>
                                <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
                            </div>
                            <div className="course-position-content">
                                <div className="credit-duration-wrap">
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-diamond"></i>
                                        <span>Credits : 125</span>
                                    </div>
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-clock-o"></i>
                                        <span>Duration : 4yrs</span>
                                    </div>
                                </div>
                                <div className="course-btn">
                                    <span className="default-btn">APPLY NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <span>
                                    <img className="animated" src={require('./../../assets/img/course/course-2.jpg')} alt="course-2" />
                                </span>
                            </div>
                            <div className="course-content">
                                <h4><span>Apparel Manufacturing</span></h4>
                                <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.</p>
                            </div>
                            <div className="course-position-content">
                                <div className="credit-duration-wrap">
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-diamond"></i>
                                        <span>Credits : 125</span>
                                    </div>
                                    <div className="sin-credit-duration">
                                        <i className="fa fa-clock-o"></i>
                                        <span>Duration : 4yrs</span>
                                    </div>
                                </div>
                                <div className="course-btn">
                                    <span className="default-btn">APPLY NOW</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

        )
    }
}

class AchivementArea extends Component {
    render() {
        return (
            <div className="achievement-area pt-130 pb-115">
                <div className="container">
                    <div className="section-title mb-75">
                        <h2>Our <span>Achievement</span></h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-one">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/achieve-1.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">890</h2>
                                    <span>STUDENTS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-two">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/achieve-2.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">670</h2>
                                    <span>GRADUATE</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-three">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/achieve-3.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">160</h2>
                                    <span>AWARD WINNING</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count mb-30 count-four">
                                <div className="count-img">
                                    <img src={require('./../../assets/img/icon-img/achieve-4.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">200</h2>
                                    <span>FACULTIES</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider-wrap mt-45">
                        <Slider {...sliderSettings.TextSlider}>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../../assets/img/testimonial/testi-b1.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-12">
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
                                    <div className="ml-auto col-lg-6 col-md-12">
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
                                    <div className="ml-auto col-lg-6 col-md-12">
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
                                    <div className="ml-auto col-lg-6 col-md-12">
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
                        <img alt="" src={require('./../../assets/img/icon-img/testi-text.png')} />
                    </div>
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
                                                <li><span className="facebook"><i className="fa fa-facebook"></i></span></li>
                                                <li><span className="youtube-play"><i className="fa fa-youtube-play"></i></span></li>
                                                <li><span className="twitter"><i className="fa fa-twitter"></i></span></li>
                                                <li><span className="google-plus"><i className="fa fa-google-plus"></i></span></li>
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
                                                <li><span className="facebook"><i className="fa fa-facebook"></i></span></li>
                                                <li><span className="youtube-play"><i className="fa fa-youtube-play"></i></span></li>
                                                <li><span className="twitter"><i className="fa fa-twitter"></i></span></li>
                                                <li><span className="google-plus"><i className="fa fa-google-plus"></i></span></li>
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
                                                <li><span className="facebook"><i className="fa fa-facebook"></i></span></li>
                                                <li><span className="youtube-play"><i className="fa fa-youtube-play"></i></span></li>
                                                <li><span className="twitter"><i className="fa fa-twitter"></i></span></li>
                                                <li><span className="google-plus"><i className="fa fa-google-plus"></i></span></li>
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
                                                <li><span className="facebook"><i className="fa fa-facebook"></i></span></li>
                                                <li><span className="youtube-play"><i className="fa fa-youtube-play"></i></span></li>
                                                <li><span className="twitter"><i className="fa fa-twitter"></i></span></li>
                                                <li><span className="google-plus"><i className="fa fa-google-plus"></i></span></li>
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
                                                <li><span className="facebook"><i className="fa fa-facebook"></i></span></li>
                                                <li><span className="youtube-play"><i className="fa fa-youtube-play"></i></span></li>
                                                <li><span className="twitter"><i className="fa fa-twitter"></i></span></li>
                                                <li><span className="google-plus"><i className="fa fa-google-plus"></i></span></li>
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

class EventArea extends Component {
    render() {
        return (
            <div className="event-area bg-img default-overlay pt-130 pb-130" style={{ backgroundImage: `url(${require('./../../assets/img/bg/bg-3.jpg')})` }}>
                <div className="container">
                    <div className="section-title mb-75">
                        <h2><span>Our</span> Event</h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <OwlCarousel
                        className="event-active owl-carousel nav-style-1"
                        loop={true}
                        nav={true}
                        navText={[`<i class="fa fa-angle-left"></i>`, `<i class="fa fa-angle-right"></i>`]}
                        navElement={'div'}
                        dots={false}
                        animateOut={'fadeOut'}
                        animateIn={'fadeIn'}
                        item={3}
                        margin={30}
                        responsive={{
                            0: {
                                items: 1
                            },
                            768: {
                                items: 2
                            },
                            992: {
                                items: 3
                            },
                            1000: {
                                items: 3
                            }
                        }}
                    >
                        <div className="single-event event-white-bg">
                            <div className="event-img">
                                <span><img src={require('./../../assets/img/event/event-1.jpg')} alt="event-1" /></span>
                                <div className="event-date-wrap">
                                    <span className="event-date">1st</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h3><span>Aempor incididunt ut labore ejam.</span></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div className="event-meta-wrap">
                                    <div className="event-meta">
                                        <i className="fa fa-location-arrow"></i>
                                        <span>Mascot Plaza ,Uttara</span>
                                    </div>
                                    <div className="event-meta">
                                        <i className="fa fa-clock-o"></i>
                                        <span>11:00 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-event event-white-bg">
                            <div className="event-img">
                                <span><img src={require('./../../assets/img/event/event-2.jpg')} alt="event-2" /></span>
                                <div className="event-date-wrap">
                                    <span className="event-date">10th</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h3><span>Global Conference on Business.</span></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div className="event-meta-wrap">
                                    <div className="event-meta">
                                        <i className="fa fa-location-arrow"></i>
                                        <span>Shubastu ,Dadda</span>
                                    </div>
                                    <div className="event-meta">
                                        <i className="fa fa-clock-o"></i>
                                        <span>08:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-event event-white-bg">
                            <div className="event-img">
                                <span><img src={require('./../../assets/img/event/event-3.jpg')} alt="event-3" /></span>
                                <div className="event-date-wrap">
                                    <span className="event-date">1st</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h3><span>Academic Conference Maui.</span></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div className="event-meta-wrap">
                                    <div className="event-meta">
                                        <i className="fa fa-location-arrow"></i>
                                        <span>Banasree ,Rampura</span>
                                    </div>
                                    <div className="event-meta">
                                        <i className="fa fa-clock-o"></i>
                                        <span>10:00 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-event event-white-bg">
                            <div className="event-img">
                                <span><img src={require('./../../assets/img/event/event-2.jpg')} alt="event-2" /></span>
                                <div className="event-date-wrap">
                                    <span className="event-date">1st</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h3><span>Social Sciences & Education.</span></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div className="event-meta-wrap">
                                    <div className="event-meta">
                                        <i className="fa fa-location-arrow"></i>
                                        <span>Shubastu ,Badda</span>
                                    </div>
                                    <div className="event-meta">
                                        <i className="fa fa-clock-o"></i>
                                        <span>10:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

        )
    }
}

class BlogArea extends Component {
    render() {
        return (
            <div className="blog-area pt-130 pb-100">
                <div className="container">
                    <div className="section-title mb-75">
                        <h2>Our <span>Newsfeed</span></h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog mb-30">
                                <div className="blog-img">
                                    <span><img src={require('./../../assets/img/blog/blog-1.jpg')} alt="blog-1" /></span>
                                </div>
                                <div className="blog-content-wrap">
                                    <span>Education</span>
                                    <div className="blog-content">
                                        <h4><span>Testing is a great thing.</span></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div className="blog-meta">
                                            <ul>
                                                <li><span><i className="fa fa-user"></i> Adrin Azra</span></li>
                                                <li><span><i className="fa fa-comments-o"></i> 15</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-date">
                                        <span><i className="fa fa-calendar-o"></i> Jun, 24th 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog mb-30">
                                <div className="blog-img">
                                    <span><img src={require('./../../assets/img/blog/blog-2.jpg')} alt="blog-2" /></span>
                                </div>
                                <div className="blog-content-wrap">
                                    <span>Education</span>
                                    <div className="blog-content">
                                        <h4><span>A variation of the ordinary.</span></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div className="blog-meta">
                                            <ul>
                                                <li><span><i className="fa fa-user"></i> Tayeb Jon</span></li>
                                                <li><span><i className="fa fa-comments-o"></i> 12</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-date">
                                        <span><i className="fa fa-calendar-o"></i> Feb, 18th 2017</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog mb-30">
                                <div className="blog-img">
                                    <span><img src={require('./../../assets/img/blog/blog-3.jpg')} alt="blog-3" /></span>
                                </div>
                                <div className="blog-content-wrap">
                                    <span>Education</span>
                                    <div className="blog-content">
                                        <h4><span>In publishing and graphic.</span></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div className="blog-meta">
                                            <ul>
                                                <li><span><i className="fa fa-user"></i> Rifat Al</span></li>
                                                <li><span><i className="fa fa-comments-o"></i> 20</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-date">
                                        <span><i className="fa fa-calendar-o"></i> Oct, 14th 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog mb-30">
                                <div className="blog-img">
                                    <span><img src={require('./../../assets/img/blog/blog-4.jpg')} alt="blog-4" /></span>
                                </div>
                                <div className="blog-content-wrap">
                                    <span>Education</span>
                                    <div className="blog-content">
                                        <h4><span>Learn English in ease.</span></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div className="blog-meta">
                                            <ul>
                                                <li><span><i className="fa fa-user"></i>Md Tamim</span></li>
                                                <li><span><i className="fa fa-comments-o"></i> 08</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-date">
                                        <span><i className="fa fa-calendar-o"></i> Jun, 21th 2017</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}