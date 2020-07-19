import React, { PureComponent } from "react";
import { Formik, Field } from "formik";

import NewsTags from "./NewsTags.jsx";
import SocialButtons from "../SocialButtons/SocialButtons.jsx";

export default class NewsSideBar extends PureComponent {
    render() {
        const tags = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
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
    const introduction = `quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolors eos qui ratione voluptatem sad.`;
    const image = 'banner/banner-4.jpg';

    const title = document.title;
    const origin = window.location.origin;

    return (
        <div className="sidebar-about mb-40">
            <div className="sidebar-title mb-15">
                <h4>About Us</h4>
            </div>
            <p>{introduction}</p>
            <span><img src={require(`./../../assets/img/${image}`)} alt="glaxdu" /></span>
            <div className="sidebar-social">
                <SocialButtons
                    title={title}
                    sharedUrl={origin}
                    description={introduction}
                    sourceName={'Glaxdu'}
                />
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
                        <span><img src={require('./../../assets/img/blog/recent-post-1.jpg')} alt="" /></span>
                    </div>
                    <div className="recent-post-content">
                        <h5><span>Blog title will be here.</span></h5>
                        <span>Blog Category</span>
                        <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                </div>
                <div className="single-recent-post">
                    <div className="recent-post-img">
                        <span><img src={require('./../../assets/img/blog/recent-post-2.jpg')} alt="" /></span>
                    </div>
                    <div className="recent-post-content">
                        <h5><span>Blog title will be here.</span></h5>
                        <span>Blog Category</span>
                        <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
