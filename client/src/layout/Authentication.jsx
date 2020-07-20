import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticateForm from '../components/AuthenticateForm/AuthenticateForm.jsx';

export default class Authentication extends Component {
    render() {
        return (
            <div id="wrapper">
                <Switch>
                    <Route path="/sign-in"
                        render={routerProps => <AuthenticateForm {...routerProps} templateType='signin' />} />
                    <Route path="/sign-up"
                        render={routerProps => <AuthenticateForm {...routerProps} templateType='signup' />} />
                </Switch>
            </div>
        )
    }
}