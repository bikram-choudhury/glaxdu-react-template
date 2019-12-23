import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import Admin from './layout/Admin.jsx';

const hist = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/home" />
        </Switch>
      </Router>
    );
  }
}
