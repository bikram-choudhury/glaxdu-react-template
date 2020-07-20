import React from 'react';

export default function ContactArea(props) {
    return (
        <div className="contact-area pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="contact-map mr-70">
                            <div id="map"></div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-form">
                            <div className="contact-title mb-45">
                                <h2>Stay <span>Connected</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipis do eiusmod tempor indunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <form id="contact-form" action="http://demo.hasthemes.com/glaxdu-v1/glaxdu/assets/php/mail.php" method="post">
                                <input name="name" placeholder="Name*" type="text" />
                                <input name="email" placeholder="Email*" type="email" />
                                <input name="subject" placeholder="Subject*" type="text" />
                                <textarea name="message" placeholder="Message"></textarea>
                                <button className="submit btn-style" type="submit">SEND MESSAGE</button>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}