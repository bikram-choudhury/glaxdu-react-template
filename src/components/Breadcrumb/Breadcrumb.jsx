import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Breadcrumb(props) {
    const { title, subTitle, templateName, bgImage } = props;
    return (
        <div className="breadcrumb-area">
            <div className="breadcrumb-top default-overlay bg-img breadcrumb-overly-4 pt-100 pb-95"
                style={{ backgroundImage: `url(${require(`./../../assets/img/bg/${bgImage}`)})` }}>
                <div className="container">
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                </div>
            </div>
            <div className="breadcrumb-bottom">
                <div className="container">
                    <ul>
                        <li><Link to={'/'}>Home</Link> <span><i className="fa fa-angle-double-right"></i>{templateName}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Breadcrumb.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    templateName: PropTypes.string,
    bgImage: PropTypes.string
}