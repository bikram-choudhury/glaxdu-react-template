import React, { Component, Fragment } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <SliderArea />
                <ChooseUs />
                <AboutUs />
                <CourseArea />
                <AchivementArea />
                <RegisterArea />
                <TeacherArea />
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
                <div className="">
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
                        <div className="single-slider slider-height-1 bg-img" style={{ backgroundImage: `url(${require('./../assets/img/slider/slider-1.jpg')})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                                        <div className="slider-content slider-animated-1 pt-230">
                                            <h1 className="animated">MakeYour Own World</h1>
                                            <p className="animated">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                            <div className="slider-btn">
                                                <a className="animated default-btn btn-green-color" href="about-us.html">ABOUT US</a>
                                                <a className="animated default-btn btn-white-color" href="contact.html">CONTACT US</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-single-img slider-animated-1">
                                    <img className="animated" src={require('./../assets/img/slider/single-slide-1.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="single-slider slider-height-1 bg-img" style={{ backgroundImage: `url(${require('./../assets/img/slider/slider-1.jpg')})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                                        <div className="slider-content slider-animated-1 pt-230">
                                            <h1 className="animated">MakeYour Own World</h1>
                                            <p className="animated">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                            <div className="slider-btn">
                                                <a className="animated default-btn btn-green-color" href="about-us.html">ABOUT US</a>
                                                <a className="animated default-btn btn-white-color" href="contact.html">CONTACT US</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-single-img slider-animated-1">
                                    <img className="animated" src={require('./../assets/img/slider/single-slide-1.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
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
                                    <img className="animated" src={require('./../assets/img/icon-img/service-1.png')} alt="" />
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
                                    <img className="animated" src={require('./../assets/img/icon-img/service-2.png')} alt="" />
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
                                    <img className="animated" src={require('./../assets/img/icon-img/service-3.png')} alt="" />
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
                                    <img className="animated" src={require('./../assets/img/icon-img/service-4.png')} alt="" />
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
                                    <a className="default-btn" href="about-us.html">ABOUT US</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-img default-overlay">
                                <img src={require('./../assets/img/banner/banner-1.jpg')} alt="" />
                                <a className="video-btn video-popup" href="https://www.youtube.com/watch?v=sv5hK4crIRc">
                                    <img className="animated" src={require('./../assets/img/icon-img/video.png')} alt="" />
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
            <div className="course-area bg-img pt-130 pb-10" style={{ backgroundImage: `url(${require('./../assets/img/bg/bg-1.jpg')})` }}>
                <div className="container">
                    <div className="section-title mb-75">
                        <h2> <span>Our</span> Courses</h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div className="course-slider-active nav-style-1 owl-carousel">
                        <div className="single-course">
                            <div className="course-img">
                                <a href="course-details.html"><img className="animated" src={require('./../assets/img/course/course-1.jpg')} alt="" /></a>
                                <span>Addmission Going On</span>
                            </div>
                            <div className="course-content">
                                <h4><a href="course-details.html">Apparel Manufacturing</a></h4>
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
                                    <a className="default-btn" href="#">APPLY NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <a href="course-details.html"><img className="animated" src={require('./../assets/img/course/course-2.jpg')} alt="" /></a>
                            </div>
                            <div className="course-content">
                                <h4><a href="course-details.html">Grphic Design & Multimedia</a></h4>
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
                                    <a className="default-btn" href="#">APPLY NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <a href="course-details.html"><img className="animated" src={require('./../assets/img/course/course-3.jpg')} alt="" /></a>
                            </div>
                            <div className="course-content">
                                <h4><a href="course-details.html">Computer Engineering</a></h4>
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
                                    <a className="default-btn" href="#">APPLY NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <a href="course-details.html"><img className="animated" src={require('./../assets/img/course/course-4.jpg')} alt="" /></a>
                                <span>Post Graduation Course</span>
                            </div>
                            <div className="course-content">
                                <h4><a href="course-details.html">Fashion & Technology</a></h4>
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
                                    <a className="default-btn" href="#">APPLY NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-course">
                            <div className="course-img">
                                <a href="course-details.html"><img className="animated" src={require('./../assets/img/course/course-2.jpg')} alt="" /></a>
                            </div>
                            <div className="course-content">
                                <h4><a href="course-details.html">Apparel Manufacturing</a></h4>
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
                                    <a className="default-btn" href="#">APPLY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <img src={require('./../assets/img/icon-img/achieve-1.png')} alt="" />
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
                                    <img src={require('./../assets/img/icon-img/achieve-2.png')} alt="" />
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
                                    <img src={require('./../assets/img/icon-img/achieve-3.png')} alt="" />
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
                                    <img src={require('./../assets/img/icon-img/achieve-4.png')} alt="" />
                                </div>
                                <div className="count-content">
                                    <h2 className="count">200</h2>
                                    <span>FACULTIES</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider-wrap mt-45">
                        <div className="testimonial-text-slider">
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../assets/img/testimonial/testi-b1.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-12">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../assets/img/bg/testi.png')})` }}>
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
                                                <img alt="" src={require('./../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../assets/img/testimonial/testi-b3.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-12">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../assets/img/bg/testi.png')})` }}>
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
                                                <img alt="" src={require('./../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../assets/img/testimonial/testi-b2.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-12">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../assets/img/bg/testi.png')})` }}>
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
                                                <img alt="" src={require('./../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-content-wrap">
                                <div className="testi-big-img">
                                    <img alt="" src={require('./../assets/img/testimonial/testi-b2.jpg')} />
                                </div>
                                <div className="row no-gutters">
                                    <div className="ml-auto col-lg-6 col-md-12">
                                        <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require('./../assets/img/bg/testi.png')})` }}>
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
                                                <img alt="" src={require('./../assets/img/icon-img/testi-icon.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-image-slider">
                            <div className="sin-testi-image">
                                <img src={require('./../assets/img/testimonial/testi-s2.jpg')} alt="" />
                            </div>
                            <div className="sin-testi-image">
                                <img src={require('./../assets/img/testimonial/testi-s1.jpg')} alt="" />
                            </div>
                            <div className="sin-testi-image">
                                <img src={require('./../assets/img/testimonial/testi-s3.jpg')} alt="" />
                            </div>
                            <div className="sin-testi-image">
                                <img src={require('./../assets/img/testimonial/testi-s3.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-text-img">
                        <img alt="" src={require('./../assets/img/icon-img/testi-text.png')} />
                    </div>
                </div>
            </div>

        )
    }
}

class RegisterArea extends Component {
    render() {
        return (
            <div class="register-area bg-img pt-130 pb-130" style={{ backgroundImage: `url(${require('./../assets/img/bg/bg-2.jpg')})` }}>
                <div class="container">
                    <div class="section-title-2 mb-75 white-text">
                        <h2>Register <span>Now</span></h2>
                        <p>Winter Admission Is Going On. We are announcing  Special discount for winter batch 2019.</p>
                    </div>
                    <div class="register-wrap">
                        <div id="register-3" class="mouse-bg">
                            <div class="winter-banner">
                                <img src={require('./../assets/img/banner/regi-1.png')} alt="" />
                                <div class="winter-content">
                                    <span>WINTER </span>
                                    <h3>2019</h3>
                                    <span>ADMISSION </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-10 col-md-8">
                                <div class="register-form">
                                    <h4>Get A free Registration</h4>
                                    <form>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="contact-form-style mb-20">
                                                    <input name="name" placeholder="First Name" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="contact-form-style mb-20">
                                                    <input name="name" placeholder="Last Name" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="contact-form-style mb-20">
                                                    <input name="name" placeholder="Phone" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="contact-form-style mb-20">
                                                    <input name="name" placeholder="Email" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="contact-form-style">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                    <button class="submit default-btn" type="submit">SUBMIT NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="register-1" class="mouse-bg"></div>
                <div id="register-2" class="mouse-bg"></div>
            </div>
        )
    }
}

class TeacherArea extends Component {
    render() {
        return (
            <div class="teacher-area pt-130 pb-100">
                <div class="container">
                    <div class="section-title mb-75">
                        <h2>Best <span>Teacher</span></h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div class="custom-row">
                        <div class="custom-col-5">
                            <div class="single-teacher mb-30">
                                <div class="teacher-img">
                                    <img src={require('./../assets/img/teacher/teacher-1.jpg')} alt="" />
                                </div>
                                <div class="teacher-content-visible">
                                    <h4>Robi Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div class="teacher-content-wrap">
                                    <div class="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div class="teacher-social">
                                            <ul>
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="youtube-play" href="#"><i class="fa fa-youtube-play"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-col-5">
                            <div class="single-teacher mb-30">
                                <div class="teacher-img">
                                    <img src={require('./../assets/img/teacher/teacher-2.jpg')} alt="" />
                                </div>
                                <div class="teacher-content-visible">
                                    <h4>Jui Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div class="teacher-content-wrap">
                                    <div class="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div class="teacher-social">
                                            <ul>
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="youtube-play" href="#"><i class="fa fa-youtube-play"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-col-5">
                            <div class="single-teacher mb-30">
                                <div class="teacher-img">
                                    <img src={require('./../assets/img/teacher/teacher-3.jpg')} alt="" />
                                </div>
                                <div class="teacher-content-visible">
                                    <h4>Fawd Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div class="teacher-content-wrap">
                                    <div class="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div class="teacher-social">
                                            <ul>
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="youtube-play" href="#"><i class="fa fa-youtube-play"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-col-5">
                            <div class="single-teacher mb-30">
                                <div class="teacher-img">
                                    <img src={require('./../assets/img/teacher/teacher-4.jpg')} alt="" />
                                </div>
                                <div class="teacher-content-visible">
                                    <h4>Fawd Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div class="teacher-content-wrap">
                                    <div class="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div class="teacher-social">
                                            <ul>
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="youtube-play" href="#"><i class="fa fa-youtube-play"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-col-5">
                            <div class="single-teacher mb-30">
                                <div class="teacher-img">
                                    <img src={require('./../assets/img/teacher/teacher-5.jpg')} alt="" />
                                </div>
                                <div class="teacher-content-visible">
                                    <h4>Jui Khan</h4>
                                    <h5>Lecturer</h5>
                                </div>
                                <div class="teacher-content-wrap">
                                    <div class="teacher-content">
                                        <h4>Fawd Khan</h4>
                                        <h5>Lecturer</h5>
                                        <p>Tempor incididunt magna aliqua.</p>
                                        <div class="teacher-social">
                                            <ul>
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="youtube-play" href="#"><i class="fa fa-youtube-play"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
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
            <div class="event-area bg-img default-overlay pt-130 pb-130" style={{ backgroundImage: `url(${require('./../assets/img/bg/bg-3.jpg')})` }}>
                <div class="container">
                    <div class="section-title mb-75">
                        <h2><span>Our</span> Event</h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div class="event-active owl-carousel nav-style-1">
                        <div class="single-event event-white-bg">
                            <div class="event-img">
                                <a href="event-details.html"><img src={require('./../assets/img/event/event-1.jpg')} alt="" /></a>
                                <div class="event-date-wrap">
                                    <span class="event-date">1st</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div class="event-content">
                                <h3><a href="event-details.html">Aempor incididunt ut labore ejam.</a></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div class="event-meta-wrap">
                                    <div class="event-meta">
                                        <i class="fa fa-location-arrow"></i>
                                        <span>Mascot Plaza ,Uttara</span>
                                    </div>
                                    <div class="event-meta">
                                        <i class="fa fa-clock-o"></i>
                                        <span>11:00 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-event event-white-bg">
                            <div class="event-img">
                                <a href="event-details.html"><img src={require('./../assets/img/event/event-2.jpg')} alt="" /></a>
                                <div class="event-date-wrap">
                                    <span class="event-date">10th</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div class="event-content">
                                <h3><a href="event-details.html">Global Conference on Business.</a></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div class="event-meta-wrap">
                                    <div class="event-meta">
                                        <i class="fa fa-location-arrow"></i>
                                        <span>Shubastu ,Dadda</span>
                                    </div>
                                    <div class="event-meta">
                                        <i class="fa fa-clock-o"></i>
                                        <span>08:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-event event-white-bg">
                            <div class="event-img">
                                <a href="event-details.html"><img src={require('./../assets/img/event/event-3.jpg')} alt="" /></a>
                                <div class="event-date-wrap">
                                    <span class="event-date">1st</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div class="event-content">
                                <h3><a href="event-details.html">Academic Conference Maui.</a></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div class="event-meta-wrap">
                                    <div class="event-meta">
                                        <i class="fa fa-location-arrow"></i>
                                        <span>Banasree ,Rampura</span>
                                    </div>
                                    <div class="event-meta">
                                        <i class="fa fa-clock-o"></i>
                                        <span>10:00 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-event event-white-bg">
                            <div class="event-img">
                                <a href="event-details.html"><img src={require('./../assets/img/event/event-2.jpg')} alt="" /></a>
                                <div class="event-date-wrap">
                                    <span class="event-date">1st</span>
                                    <span>Dec</span>
                                </div>
                            </div>
                            <div class="event-content">
                                <h3><a href="event-details.html">Social Sciences & Education.</a></h3>
                                <p>Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .</p>
                                <div class="event-meta-wrap">
                                    <div class="event-meta">
                                        <i class="fa fa-location-arrow"></i>
                                        <span>Shubastu ,Badda</span>
                                    </div>
                                    <div class="event-meta">
                                        <i class="fa fa-clock-o"></i>
                                        <span>10:30 am</span>
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

class BlogArea extends Component {
    render() {
        return (
            <div class="blog-area pt-130 pb-100">
                <div class="container">
                    <div class="section-title mb-75">
                        <h2>Our <span>Newsfeed</span></h2>
                        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="blog-details.html"><img src={require('./../assets/img/blog/blog-1.jpg')} alt="" /></a>
                                </div>
                                <div class="blog-content-wrap">
                                    <span>Education</span>
                                    <div class="blog-content">
                                        <h4><a href="blog-details.html">Testing is a great thing.</a></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div class="blog-meta">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-user"></i> Adrin Azra</a></li>
                                                <li><a href="#"><i class="fa fa-comments-o"></i> 15</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="blog-date">
                                        <a href="#"><i class="fa fa-calendar-o"></i> Jun, 24th 2018</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="blog-details.html"><img src={require('./../assets/img/blog/blog-2.jpg')} alt="" /></a>
                                </div>
                                <div class="blog-content-wrap">
                                    <span>Education</span>
                                    <div class="blog-content">
                                        <h4><a href="blog-details.html">A variation of the ordinary.</a></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div class="blog-meta">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-user"></i> Tayeb Jon</a></li>
                                                <li><a href="#"><i class="fa fa-comments-o"></i> 12</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="blog-date">
                                        <a href="#"><i class="fa fa-calendar-o"></i> Feb, 18th 2017</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="blog-details.html"><img src={require('./../assets/img/blog/blog-3.jpg')} alt="" /></a>
                                </div>
                                <div class="blog-content-wrap">
                                    <span>Education</span>
                                    <div class="blog-content">
                                        <h4><a href="blog-details.html">In publishing and graphic.</a></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div class="blog-meta">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-user"></i> Rifat Al</a></li>
                                                <li><a href="#"><i class="fa fa-comments-o"></i> 20</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="blog-date">
                                        <a href="#"><i class="fa fa-calendar-o"></i> Oct, 14th 2018</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="blog-details.html"><img src={require('./../assets/img/blog/blog-4.jpg')} alt="" /></a>
                                </div>
                                <div class="blog-content-wrap">
                                    <span>Education</span>
                                    <div class="blog-content">
                                        <h4><a href="blog-details.html">Learn English in ease.</a></h4>
                                        <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                        <div class="blog-meta">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-user"></i>Md Tamim</a></li>
                                                <li><a href="#"><i class="fa fa-comments-o"></i> 08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="blog-date">
                                        <a href="#"><i class="fa fa-calendar-o"></i> Jun, 21th 2017</a>
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