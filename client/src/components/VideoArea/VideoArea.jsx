import React from 'react';
export default function VideoArea() {
    return (
        <div className="video-area bg-img pt-270 pb-270" style={{ backgroundImage: `url(${require('../../assets/img/banner/video.jpg')})` }}>
            <div className="video-btn-2">
                <a className="video-popup" href="https://www.youtube.com/watch?v=sv5hK4crIRc">
                    <img className="animated" src={require('../../assets/img/icon-img/viddeo-btn.png')} alt="" />
                </a>
            </div>
        </div>
    )
}