import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Admin from './layout/Admin.jsx';
import Authentication from './layout/Authentication.jsx';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path="/sign-in" component={Authentication} />
          <Route path="/sign-up" component={Authentication} />
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/home" />
        </Switch>
      </Router>
    );
  }
}
