import React, { Component } from 'react';
import TopHeader from '../TopHeader/TopHeader.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import Footer from '../Footer.jsx';

import { Formik, Field } from 'formik';
import Axios from 'axios';
import { JSON_PLACEHOLDER_API } from '../../glaxdu-settings';

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
            templateType: ''
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // getDerivedStateFromProps(nextProps, prevState) : Returns new state

        if (prevState.templateType !== nextProps.templateType) {
            return { templateType: nextProps.templateType }
        } else {
            return null;
        }
    }
    goToRoute = (routeType) => {
        this.props.history.push(routeType);
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
                                    <span className={templateType === 'signin' ? "active" : ''} onClick={() => this.goToRoute('sign-in')}>
                                        <h4> login </h4>
                                    </span>
                                    <span className={templateType === 'signup' ? "active" : ''} onClick={() => this.goToRoute('sign-up')}>
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

    handleLogin = (formData, { setSubmitting }) => {
        setSubmitting(true);
        console.log(formData);
        if (formData && Object.keys(formData).length) {
            const URL = `${JSON_PLACEHOLDER_API}/users`;
            Axios.post(URL, formData)
                .then(response => {
                    console.log(response);
                    setSubmitting(false);
                })
                .catch(error => console.error(error))
        }
    }
    render() {
        const initialLoginFormValue = { username: '', password: '', rememberUser: false };
        return (
            <div className="login-form-container">
                <div className="login-register-form">
                    <Formik initialValues={initialLoginFormValue} onSubmit={this.handleLogin}>
                        {({ isSubmitting, values, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Field type="input" name="username" placeholder="Username" />
                                <Field type="password" name="password" placeholder="Password" />
                                {/* <input type="text" name="username" placeholder="Username"
                                    value={values.username} onChange={handleChange} onBlur={handleBlur} /> */}
                                <div className="button-box">
                                    <div className="login-toggle-btn">
                                        <Field type="checkbox" name="rememberUser" placeholder="Username" />
                                        <label>Remember me</label>
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    <button disabled={isSubmitting} className="default-btn" type="submit"><span>Login</span></button>
                                </div>
                                <pre>{JSON.stringify(values, '', 3)}</pre>
                            </form>
                        )}
                    </Formik>

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