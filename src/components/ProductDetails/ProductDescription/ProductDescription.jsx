import React from 'react';

export default function ProductDescription(props) {
    return (
        <div className="description-review-area pb-120">
            <div className="container">
                <div className="description-review-wrapper">
                    <div className="description-review-topbar nav">
                        <a className="active" data-toggle="tab" href="#des-details1">Description</a>
                        <a data-toggle="tab" href="#des-details2">Additional information</a>
                        <a data-toggle="tab" href="#des-details3">Reviews</a>
                    </div>
                    <div className="tab-content description-review-bottom">
                        <div id="des-details1" className="tab-pane active">
                            <div className="product-description-wrapper">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar massa metus, vitae pharetra lacus sodales sit amet. Morbi accumsan suscipit lacus, sit amet egestas magna elemen tum nec. Mauris urna enim, rutrum in iaculis nec, vehicula ut libero. Etiam sit amet ex orci. Duis eget consectetur libero, eget interdum metus. Aliquam rhoncus porttitor felis, a tincidunt ex scel erisque et. Morbi faucibus venenatis dignissim. Nullam ut facilisis mauris. In hac habitasse platea dictumst. </p>
                                <p>Pellentesque luctus augue ipsum, ut tincidunt odio tempus at. Nullam ac quam venenatis, bibendum eros at, placerat risus. Maecenas cursus elit non nisl finibus congue. Donec posuere fringilla ante eu vehicula. Fusce sed erat quis nisi gravida vehicula id vitae dolor. In at libero pretium, maximus lorem vitae, pharetra turpis feugiat facilisis ullamcorper.  </p>
                            </div>
                        </div>
                        <div id="des-details2" className="tab-pane ">
                            <div className="product-anotherinfo-wrapper">
                                <ul>
                                    <li><span>Weight</span> 400 g</li>
                                    <li><span>Dimensions</span>10 x 10 x 15 cm </li>
                                    <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                    <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details3" className="tab-pane">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="review-wrapper">
                                        <div className="single-review">
                                            <div className="review-img">
                                                <img src={require('./../../../assets/img/blog/recent-post-1.jpg')} alt="" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-top-wrap">
                                                    <div className="review-left">
                                                        <div className="review-name">
                                                            <h4>White Lewis</h4>
                                                        </div>
                                                        <div className="review-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="review-left">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <div className="review-bottom">
                                                    <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla nec, convallis conval lis leo. Maecenas bibendum bibendum larius.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-review child-review">
                                            <div className="review-img">
                                                <img src={require('./../../../assets/img/blog/recent-post-2.jpg')} alt="" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-top-wrap">
                                                    <div className="review-left">
                                                        <div className="review-name">
                                                            <h4>White Lewis</h4>
                                                        </div>
                                                        <div className="review-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="review-left">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <div className="review-bottom">
                                                    <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="ratting-form-wrapper pl-50 ratting-nagative-mrg">
                                        <h3>Add a Review</h3>
                                        <div className="ratting-form">
                                            <form action="#">
                                                <div className="star-box">
                                                    <span>Your rating:</span>
                                                    <div className="ratting-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="rating-form-style mb-10">
                                                            <input placeholder="Name" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="rating-form-style mb-10">
                                                            <input placeholder="Email" type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="rating-form-style form-submit">
                                                            <textarea name="Your Review" placeholder="Message"></textarea>
                                                            <input type="submit" value="Submit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}