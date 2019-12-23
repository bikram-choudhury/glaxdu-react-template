import React, { Component } from 'react';
import TopHeader from '../TopHeader/TopHeader.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import Footer from '../Footer.jsx';

export default class AuthenticateForm extends Component {
    render() {
        return (
            <div className="App">
                <TopHeader />
                <AuthenticationContainer {...this.props} />
                <BrnadLogoArea />
                <Footer />
            </div>

        );
    }
}

class AuthenticationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templateType: props.templateType
        }
    }
    goToRoute = (routeType) => {
        this.setState({ templateType: routeType });
    }
    render() {
        let { templateType } = this.state;
        return (
            <div className="login-register-area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div className="login-register-wrapper">
                                <div className="login-register-tab-list nav">
                                    <span className={templateType === 'signin' ? "active" : ''} onClick={() => this.goToRoute('signin')}>
                                        <h4> login </h4>
                                    </span>
                                    <span className={templateType === 'signup' ? "active" : ''} onClick={() => this.goToRoute('signup')}>
                                        <h4> register </h4>
                                    </span>
                                </div>
                                <div className="tab-content">
                                    <div className={`tab-pane ${templateType === 'signin' ? "active" : ''}`}>
                                        <LoginForm />
                                    </div>
                                    <div className={`tab-pane ${templateType === 'signup' ? "active" : ''}`}>
                                        <RegisterForm />
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

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form-container">
                <div className="login-register-form">
                    <form action="#" method="post">
                        <input type="text" name="user-name" placeholder="Username" />
                        <input type="password" name="user-password" placeholder="Password" />
                        <div className="button-box">
                            <div className="login-toggle-btn">
                                <input type="checkbox" />
                                <label>Remember me</label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button className="default-btn" type="submit"><span>Login</span></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

class RegisterForm extends Component {
    render() {
        return (
            <div className="login-form-container">
                <div className="login-register-form">
                    <form action="#" method="post">
                        <input type="text" name="user-name" placeholder="Username" />
                        <input type="password" name="user-password" placeholder="Password" />
                        <input name="user-email" placeholder="Email" type="email" />
                        <div className="button-box">
                            <button className="default-btn" type="submit"><span>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}