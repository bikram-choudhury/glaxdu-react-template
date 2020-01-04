import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/ContactUs.jsx';
import News from './components/News/News.jsx';

export const AdminRoutes = [{
    path: '/home',
    layout: '/admin',
    name: 'Home',
    component: Home
}, {
    path: '/about-us',
    layout: '/admin',
    name: 'About Us',
    component: AboutUs
}, {
    path: '/news',
    layout: '/admin',
    name: 'News',
    component: News
}, {
    path: '/contact-us',
    layout: '/admin',
    name: 'Contact Us',
    component: Contact
}]