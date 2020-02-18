import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, withFormik } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../redux/actions/landing.action';

class FreeRegisterationForm extends Component {
    render() {
        const { values, handleSubmit, isSubmitting, handleReset, errors, touched } = this.props;
        return (
            <div className="register-area bg-img pt-130 pb-130" style={{ backgroundImage: `url(${require('./../../../assets/img/bg/bg-2.jpg')})` }}>
                <div className="container">
                    <div className="section-title-2 mb-75 white-text">
                        <h2>Register <span>Now</span></h2>
                        <p>Winter Admission Is Going On. We are announcing  Special discount for winter batch 2019.</p>
                    </div>
                    <div className="register-wrap">
                        <div id="register-3" className="mouse-bg">
                            <div className="winter-banner">
                                <img src={require('./../../../assets/img/banner/regi-1.png')} alt="" />
                                <div className="winter-content">
                                    <span>WINTER </span>
                                    <h3>2019</h3>
                                    <span>ADMISSION </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-md-8">
                                <div className="register-form">
                                    <h4>Get A free Registration</h4>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <Field
                                                        type="input"
                                                        name="firstName"
                                                        placeholder="First Name"
                                                        value={values.firstName}
                                                        className={`${touched.firstName && errors.firstName ? 'error' : ''}`} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <Field
                                                        type="input"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        value={values.lastName}
                                                        className={`${touched.lastName && errors.lastName ? 'error' : ''}`} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <Field
                                                        type="input"
                                                        name="phoneNumber"
                                                        placeholder="Phone"
                                                        value={values.phoneNumber}
                                                        className={`${touched.phoneNumber && errors.phoneNumber ? 'error' : ''}`} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <Field
                                                        type="input"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={values.email}
                                                        className={`${touched.email && errors.email ? 'error' : ''}`} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact-form-style">
                                                    <Field
                                                        as="textarea"
                                                        name="message"
                                                        placeholder="Message"
                                                        value={values.message}
                                                        className={`${touched.message && errors.message ? 'error' : ''}`} />
                                                    <button disabled={isSubmitting} className="submit default-btn" type="submit">SUBMIT NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="register-1" className="mouse-bg"></div>
                <div id="register-2" className="mouse-bg"></div>
            </div>
        )
    }
}

const enhancedRegisterForm = withFormik({
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        email: Yup.string().required('Email is required'),
        message: Yup.string().required('Message is required'),
    }),
    mapPropsToValues: () => ({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
    }),
    handleSubmit: (payload, { props, setSubmitting, resetForm }) => {
        props.freeRegisteration(payload, { resetForm });
        setSubmitting(true);
    },
    displayName: 'FreeRegisterationForm'
})(FreeRegisterationForm);

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(enhancedRegisterForm);