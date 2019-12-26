import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headershape from './../../assets/img/icon-img/header-shape.png';

export default class TopHeader extends Component {
    render() {
        const bgImg = { backgroundImage: `url(${headershape})` };
        return (
            <div className="header-top bg-img" style={bgImg}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-12 col-sm-8">
                            <div className="header-contact">
                                <ul>
                                    <li><i className="fa fa-phone"></i> +98 558 547 589</li>
                                    <li><i className="fa fa-envelope-o"></i><a href="#">education@email.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12 col-sm-4">
                            <div className="login-register">
                                <ul>
                                    <li>
                                        <Link to="/sign-in">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-up">Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}