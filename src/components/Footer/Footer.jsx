import React, { Component } from 'react';
import bg4 from './../../assets/img/bg/bg-4.jpg';

export default class Footer extends Component {
    render() {
        const bg = { backgroundImage: `url(${bg4})` };
        return (
            <footer className="footer-area">
                <div className="footer-top bg-img default-overlay pt-130 pb-80" style={bg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h4>ABOUT US</h4>
                                    </div>
                                    <div className="footer-about">
                                        <p>Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu</p>
                                        <div className="f-contact-info">
                                            <div className="single-f-contact-info">
                                                <i className="fa fa-home"></i>
                                                <span>Uttara, Dhaka, Bangladesh</span>
                                            </div>
                                            <div className="single-f-contact-info">
                                                <i className="fa fa-envelope-o"></i>
                                                <span><a href="#">education@email.com</a></span>
                                            </div>
                                            <div className="single-f-contact-info">
                                                <i className="fa fa-phone"></i>
                                                <span> +98 558 547 589</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h4>QUICK LINK</h4>
                                    </div>
                                    <div className="footer-list">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="course.html">Courses</a></li>
                                            <li><a href="#">Admission</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-widget negative-mrg-30 mb-40">
                                    <div className="footer-title">
                                        <h4>COURSES</h4>
                                    </div>
                                    <div className="footer-list">
                                        <ul>
                                            <li><a href="#">Under Graduate Programmes </a></li>
                                            <li><a href="#">Graduate Programmes </a></li>
                                            <li><a href="#">Diploma Courses</a></li>
                                            <li><a href="#">Others Programmes</a></li>
                                            <li><a href="#">Short Courses</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h4>GALLERY</h4>
                                    </div>
                                    <div className="footer-gallery">
                                        <ul>
                                            <li><a href="#"><img src={require('./../../assets/img/gallery/gallery-1.png')} alt="" /></a></li>
                                            <li><a href="#"><img src={require('./../../assets/img/gallery/gallery-2.png')} alt="" /></a></li>
                                            <li><a href="#"><img src={require('./../../assets/img/gallery/gallery-3.png')} alt="" /></a></li>
                                            <li><a href="#"><img src={require('./../../assets/img/gallery/gallery-4.png')} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h4>News Latter</h4>
                                    </div>
                                    <div className="subscribe-style">
                                        <p>Dugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde</p>
                                        <div id="mc_embed_signup" className="subscribe-form">
                                            <form id="mc-embedded-subscribe-form" className="validate" noValidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                                <div id="mc_embed_signup_scroll" className="mc-form">
                                                    <input className="email" type="email" required="" placeholder="Your E-mail Address" name="EMAIL" defaultValue="" />
                                                    <div className="mc-news" aria-hidden="true">
                                                        <input type="text" defaultValue="" tabIndex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                    </div>
                                                    <div className="clear">
                                                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" defaultValue="SUBMIT" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-15 pb-15">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="copyright">
                                    <p>
                                        Copyright © <a href="#">GLAXDU</a>. All Right Reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="footer-menu-social">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><a href="#">Privecy & Policy</a></li>
                                            <li><a href="#">Terms & Conditions of Use</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-social">
                                        <ul>
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
