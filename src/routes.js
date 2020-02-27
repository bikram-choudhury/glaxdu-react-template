import Home from './components/Home/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/ContactUs.jsx';
import News from './components/News/News.jsx';
import NewsDetails from './components/News/NewsDetails.jsx';
import ProductWrapper from './components/Products/ProductWrapper.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

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
    path: '/product/details',
    layout: '/admin',
    name: '',
    component: ProductDetails
}, {
    path: '/cart',
    layout: '/admin',
    name: '',
    component: Cart
}, {
    path: '/checkout',
    layout: '/admin',
    name: '',
    component: Checkout
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