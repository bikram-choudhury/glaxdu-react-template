import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import { saveUser } from '../../redux/actions/auth.action';

function RegisterationForm(props) {
    const initialRegisterFormValue = { username: '', password: '', email: '', country: '' };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <Formik
                    initialValues={initialRegisterFormValue}
                    onSubmit={(formData, config) => props.saveUsers(formData, { setSubmitting: config.setSubmitting, history: props.history })}
                >
                    {({ isSubmitting, values }) => (
                        <Form>
                            <Field type="input" name="username" placeholder="Username" />
                            <Field type="password" name="password" placeholder="Password" />
                            <Field type="email" name="email" placeholder="Email" />
                            <Field as="select" name="country">
                                <option value="">Choose ...</option>
                                <option value="india">India</option>
                                <option value="africa">Africa</option>
                                <option value="england">England</option>
                                <option value="australia">Australia</option>
                            </Field>
                            <div className="button-box">
                                <button disabled={isSubmitting} className="default-btn" type="submit"><span>Register</span></button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        saveUsers: (user, options) => dispatch(saveUser(user, options))
    }
}
export default connect(null, mapDispatchToProps)(RegisterationForm);