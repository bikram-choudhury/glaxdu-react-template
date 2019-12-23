import React, { Component } from 'react';

export default function Breadcrumb(props) {
    const { title, subTitle, templateName, bgImage } = props;
    // const backgroundImage = ;
    return (
        <div className="breadcrumb-area">
            <div className="breadcrumb-top default-overlay bg-img breadcrumb-overly-3 pt-100 pb-95"
                style={{ backgroundImage: `url(${require(`./../../assets/img/bg/${bgImage}`)})` }}>
                <div className="container">
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                </div>
            </div>
            <div className="breadcrumb-bottom">
                <div className="container">
                    <ul>
                        <li><a href="#">Home</a> <span><i className="fa fa-angle-double-right"></i>{templateName}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}