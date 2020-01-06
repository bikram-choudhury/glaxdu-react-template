import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field } from "formik";

export default class NewsSideBar extends PureComponent {
    render() {
        const tags = ['business', 'education', 'technology', 'cricket', 'football'];
        return (
            <div className="sidebar-style">
                <SearchNews />
                <ConnectWithUs />
                <RecentNews />
                <NewsTags tags={tags} />
            </div>
        )
    }
}

function SearchNews(props) {
    const initialValue = { searchQuery: '' };
    return (
        <Formik initialValues={initialValue} onSubmit={(searchData, { setSubmitting }) => {
            setSubmitting(true);
        }}>
            {
                ({ isSubmitting, values }) => (
                    <div className="sidebar-search mb-40">
                        <div className="sidebar-title mb-40">
                            <h4>Search</h4>
                        </div>
                        <form>
                            <Field type="input" name="searchQuery" placeholder="Search" />
                            <button disabled={isSubmitting}><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                )
            }
        </Formik>
    )
}

function ConnectWithUs(props) {
    return (
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
    );
}

function RecentNews(props) {
    return (
        <div className="sidebar-recent-post mb-35">
            <div className="sidebar-title mb-40">
                <h4>Recent News</h4>
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
    )
}

function NewsTags(props) {
    const tags = props.tags;
    return (
        <div className="sidebar-tag-wrap">
            <div className="sidebar-title mb-40">
                <h4>Tag</h4>
            </div>
            <div className="sidebar-tag">
                <ul>
                    {
                        tags.map((tag, index) => (
                            <li key={index}>
                                <NavLink to={`news?category=${tag}`}>{tag}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}