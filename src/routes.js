import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/ContactUs.jsx';
import News from './components/News/News.jsx';
import NewsDetails from './components/News/NewsDetails.jsx';
import ProductWrapper from './components/Products/ProductWrapper.jsx';

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
    path: '/products',
    layout: '/admin',
    name: 'Products',
    component: ProductWrapper
}, {
    path: '/news',
    layout: '/admin',
    name: 'News',
    component: News
}, {
    path: '/news-details',
    layout: '/admin',
    name: '',
    component: NewsDetails
}, {
    path: '/contact-us',
    layout: '/admin',
    name: 'Contact Us',
    component: Contact
}]