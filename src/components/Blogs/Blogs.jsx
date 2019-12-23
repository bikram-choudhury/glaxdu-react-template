import React, { Component, Fragment } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';

/*
    1. Create Blogs template
    2. Integrate with newsAPI.com API for getting blogs
    3. Do with client-side pagination

    4. On click of any Blog navigate to blog-details view with Blog id
    5. Show Blog details as per the Blog id
    6. Show the associated comments
    7. Provide a section for adding comments

    8. For everything keep same image as newsAPI.com doesn't provide any image
        (or) generate some random images and add into this
*/

export default class Blogs extends Component {
    render() {
        const breadcrumbConfig = {
            title: 'Blog Grid',
            subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
            templateName: 'Blog Grid',
            bgImage: 'breadcrumb-bg-5.jpg'
        };
        return (
            <Fragment>
                <Breadcrumb {...breadcrumbConfig} />
                <EventsArea />
            </Fragment>
        )
    }
}

class EventsArea extends Component {
    render() {
        return (
            <div className="event-area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="blog-all-wrap mr-40">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-5.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>Education</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">Testing is a great thing.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i>Apparel</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-6.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>BBA</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">A variation of the ordinary.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-7.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>Fashion</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">In publishing and graphic.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-8.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>PhotoGraphy</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">Learn English in ease.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-9.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>MBA</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">We Denounce Righteou</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-10.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>Fashion</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">It is a long established</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-11.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>Apparel</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">Testing is a great thing.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-12.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>Music</span>
                                                <div className="blog-content">
                                                    <h4><a href="blog-details.html">A variation of the ordinary.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="#"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="single-blog mb-30">
                                            <div className="blog-img">
                                                <a href="blog-details.html"><img src={require('./../../assets/img/blog/blog-13.jpg')} alt="" /></a>
                                            </div>
                                            <div className="blog-content-wrap">
                                                <span>Graphic</span>
                                                <div className="blog-content">
                                                    <h4><a href="#">In publishing and graphic.</a></h4>
                                                    <p>doloremque laudan tium, totam ersps uns iste natus</p>
                                                    <div className="blog-meta">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i> Adrin Azra</a></li>
                                                            <li><a href="#"><i className="fa fa-comments-o"></i> 10</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-date">
                                                    <a href="blog-details.html"><i className="fa fa-calendar-o"></i> June, 24th 2017</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-pagination-style text-center mt-25">
                                    <ul>
                                        <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="sidebar-style">
                                <div className="sidebar-search mb-40">
                                    <div className="sidebar-title mb-40">
                                        <h4>Search</h4>
                                    </div>
                                    <form>
                                        <input type="text" placeholder="Search" />
                                        <button><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="sidebar-about mb-40">
                                    <div className="sidebar-title mb-15">
                                        <h4>About Us</h4>
                                    </div>
                                    <p>quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolors eos qui ratione voluptatem sad.</p>
                                    <a href="#"><img src={require('./../../assets/img/banner/banner-4.jpg')} alt="" /></a>
                                    <div className="sidebar-social">
                                        <ul>
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-recent-post mb-35">
                                    <div className="sidebar-title mb-40">
                                        <h4>Recent Post</h4>
                                    </div>
                                    <div className="recent-post-wrap">
                                        <div className="single-recent-post">
                                            <div className="recent-post-img">
                                                <a href="#"><img src={require('./../../assets/img/blog/recent-post-1.jpg')} alt="" /></a>
                                            </div>
                                            <div className="recent-post-content">
                                                <h5><a href="#">Blog title will be here.</a></h5>
                                                <span>Blog Category</span>
                                                <p>Datat non proident qui offici.hafw adec qart.</p>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="recent-post-img">
                                                <a href="#"><img src={require('./../../assets/img/blog/recent-post-2.jpg')} alt="" /></a>
                                            </div>
                                            <div className="recent-post-content">
                                                <h5><a href="#">Blog title will be here.</a></h5>
                                                <span>Blog Category</span>
                                                <p>Datat non proident qui offici.hafw adec qart.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-category mb-40">
                                    <div className="sidebar-title mb-40">
                                        <h4>Course Category</h4>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li><a href="#">MBA <span>04</span></a></li>
                                            <li><a href="#">Graduate <span>08</span></a></li>
                                            <li><a href="#">Under Graduate <span>04</span></a></li>
                                            <li><a href="#">BBA <span>06</span></a></li>
                                            <li><a href="#">Engineering <span>04</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-recent-course-wrap mb-40">
                                    <div className="sidebar-title mb-40">
                                        <h4>Recent Courses</h4>
                                    </div>
                                    <div className="sidebar-recent-course">
                                        <div className="sin-sidebar-recent-course">
                                            <div className="sidebar-recent-course-img">
                                                <a href="#"><img src={require('./../../assets/img/blog/recent-post-1.jpg')} alt="" /></a>
                                            </div>
                                            <div className="sidebar-recent-course-content">
                                                <h4><a href="#">Course Title</a></h4>
                                                <ul>
                                                    <li>Credits : 125</li>
                                                    <li className="duration-color">Duration : 4yrs</li>
                                                </ul>
                                                <p>Datat non proident qui offici.hafw adec qart.</p>
                                            </div>
                                        </div>
                                        <div className="sin-sidebar-recent-course">
                                            <div className="sidebar-recent-course-img">
                                                <a href="#"><img src={require('./../../assets/img/blog/recent-post-2.jpg')} alt="" /></a>
                                            </div>
                                            <div className="sidebar-recent-course-content">
                                                <h4><a href="#">Course Title</a></h4>
                                                <ul>
                                                    <li>Credits : 125</li>
                                                    <li className="duration-color">Duration : 4yrs</li>
                                                </ul>
                                                <p>Datat non proident qui offici.hafw adec qart.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-tag-wrap">
                                    <div className="sidebar-title mb-40">
                                        <h4>Tag</h4>
                                    </div>
                                    <div className="sidebar-tag">
                                        <ul>
                                            <li><a href="#">Loremsite</a></li>
                                            <li><a href="#">Loreipsum</a></li>
                                            <li><a href="#">Dolar</a></li>
                                            <li><a href="#">Site ament dollar</a></li>
                                            <li><a href="#">Loremsite</a></li>
                                            <li><a href="#">Dummy Text</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}