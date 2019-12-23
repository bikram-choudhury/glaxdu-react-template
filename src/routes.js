import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Contact from './components/Contact/ContactUs.jsx';

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
    path: '/blogs',
    layout: '/admin',
    name: 'Blogs',
    component: Blogs
}, {
    path: '/contact-us',
    layout: '/admin',
    name: 'Contact Us',
    component: Contact
}]