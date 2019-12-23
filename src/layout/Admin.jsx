import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { AdminRoutes } from './../routes.js';

const adminRoutes = (
    <Switch>
        {
            AdminRoutes.map((route, index) => {
                return <Route path={route.layout + route.path} component={route.component} key={index} />
            })
        }
    </Switch>
);

export default class Admin extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    {adminRoutes}
                </main>
                <Footer />
                <ScrollToTop
                    showUnder={160}
                    scrollText={'<i class="fa fa-angle-double-up"></i>'}
                    easingType={'linear'}
                    scrollSpeed={900}
                    animation={'fade'}
                >
                </ScrollToTop>
            </div>
        );
    }
}