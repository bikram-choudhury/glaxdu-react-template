import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

export default class BrnadLogoArea extends Component {
    render() {
        return (
            <div className="brand-logo-area pb-130">
                <div className="container">
                    <OwlCarousel
                        className="brand-logo-active owl-carousel"
                        loop={true}
                        nav={false}
                        autoplay={false}
                        dots={false}
                        autoplayTimeout={5000}
                        animateOut={'fadeOut'}
                        animateIn={'fadeIn'}
                        margin={30}
                        item={6}
                        responsive={{
                            0: { items: 2 },
                            576: { items: 3 },
                            768: { items: 4 },
                            992: { items: 4 },
                            1000: { items: 6 }
                        }}
                    >
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/1.png')} alt="" /></a>
                        </div>
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/2.png')} alt="" /></a>
                        </div>
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/3.png')} alt="" /></a>
                        </div>
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/4.png')} alt="" /></a>
                        </div>
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/5.png')} alt="" /></a>
                        </div>
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/6.png')} alt="" /></a>
                        </div>
                        <div className="single-brand-logo">
                            <a href="#"><img src={require('./../../assets/img/brand-logo/2.png')} alt="" /></a>
                        </div>
                    </OwlCarousel>
                </div>
            </div >
        )
    }
}