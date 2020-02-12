import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { authenticateUser } from '../../redux/actions/auth.action';

function LoginForm(props) {
    const initialLoginFormValue = { username: '', password: '', rememberUser: false };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <Formik
                    initialValues={initialLoginFormValue}
                    onSubmit={
                        (formData, config) =>
                            props.authenticateUser(
                                formData,
                                { setSubmitting: config.setSubmitting, history: props.history }
                            )
                    }>
                    {
                        ({ isSubmitting, values }) => (
                            <Form>
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
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser: (user, options) => dispatch(authenticateUser(user, options))
    }
}
export default connect(null, mapDispatchToProps)(LoginForm);
