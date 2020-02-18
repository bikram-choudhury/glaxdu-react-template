import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Admin from './layout/Admin.jsx';
import Authentication from './layout/Authentication.jsx';
import { getAccessToken } from './redux/reducers';

const browserHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path="/sign-in" render={
            routerProps => {
              return (
                !this.props.accessToken ? <Authentication /> : <Redirect to="/admin/home" />
              )
            }
          } />
          <Route path="/sign-up" render={
            routerProps => {
              return (
                !this.props.accessToken ? <Authentication /> : <Redirect to="/admin/home" />
              )
            }
          } />
          <Route path="/admin" render={
            routeProps => {
              return (
                this.props.accessToken ? <Admin /> : <Redirect to={{ pathname: '/sign-in', state: { from: routeProps.location } }} />
              )
            }
          } />
          <Redirect from="/" to="/admin/home" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ accessToken: getAccessToken(state) });
export default connect(mapStateToProps)(App);
