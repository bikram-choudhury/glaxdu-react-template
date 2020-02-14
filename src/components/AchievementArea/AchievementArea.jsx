import React from 'react';
import Slider from "react-slick";
import { sliderSettings } from './../../glaxdu-settings';
import PropTypes from 'prop-types';

export default function AchievementArea(props) {
    return (
        <div className="achievement-area pt-130 pb-115">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>What <span>People Say</span></h2>
                    <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                </div>
                <div className="testimonial-slider-wrap mt-45">
                    <Slider {...sliderSettings.TextSlider}>
                        {
                            props.contentWrap && props.contentWrap.map((wrap, index) => {
                                return (
                                    <div className="testi-content-wrap" key={index}>
                                        <div className="testi-big-img">
                                            <img alt="" src={require(`./../../assets/img/${wrap.imgSrc}`)} />
                                        </div>
                                        <div className="row no-gutters">
                                            <div className="ml-auto col-lg-6 col-md-6">
                                                <div className="testi-content bg-img default-overlay" style={{ backgroundImage: `url(${require(`./../../assets/img/${wrap.bgImg}`)})` }}>
                                                    <div className="quote-style quote-left">
                                                        <i className="fa fa-quote-left"></i>
                                                    </div>
                                                    <p>{wrap.description}</p>
                                                    <div className="testi-info">
                                                        <h5>{wrap.name}</h5>
                                                        <span>{wrap.title}</span>
                                                    </div>
                                                    <div className="quote-style quote-right">
                                                        <i className="fa fa-quote-right"></i>
                                                    </div>
                                                    <div className="testi-arrow">
                                                        <img alt="" src={require(`./../../assets/img/${wrap.iconImg}`)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </Slider>

                    <Slider {...sliderSettings.ImageSlider}>
                        {
                            props.imgWrap && props.imgWrap.map((wrap, index) => {
                                return (
                                    <div className="sin-testi-image" key={index}>
                                        <img src={require(`./../../assets/img/${wrap.img}`)} alt={wrap.title} />
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
                <div className="testimonial-text-img">
                    <img src={require('./../../assets/img/icon-img/testi-text.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

AchievementArea.propTypes = {
    contentWrap: PropTypes.arrayOf(
        PropTypes.shape({
            imgSrc: PropTypes.string,
            bgImg: PropTypes.string,
            description: PropTypes.string,
            name: PropTypes.string,
            title: PropTypes.string,
            iconImg: PropTypes.string,
        })
    ),
    imgWrap: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            img: PropTypes.string
        })
    )
}