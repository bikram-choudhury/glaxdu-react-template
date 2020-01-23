import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import NewsSideBar from './NewsSidebar.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';

class NewsDetails extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props.newsDetails);
    }
    render() {
        const breadcrumbConfig = {
            title: 'News Details',
            subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
            templateName: 'News Details',
            bgImage: 'breadcrumb-bg-5.jpg'
        };
        return (
            <Fragment>
                <Breadcrumb {...breadcrumbConfig} />
                {
                    this.props.newsDetail ? <EventArea {...this.props} /> : ""
                }
                <BrnadLogoArea />
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const { news } = state;
    const { match } = ownProps;
    const escapedNewsTitle = match.params && match.params.newsTitle;
    const title = decodeURIComponent(escapedNewsTitle);
    const newsDetail = news.list.find(adhoc => adhoc.title === title);
    const relatedNewsList = news.list.filter(adhoc => adhoc.source.name === newsDetail.source.name);
    const relatedNews = relatedNewsList.slice(0, 5);
    return { newsDetail, relatedNews };
}

export default connect(mapStateToProps)(NewsDetails);

function EventArea(props) {

    const { newsDetail, relatedNews } = props;
    const { urlToImage, publishedAt, source, title, description, content, url } = newsDetail;

    return (
        <div className="event-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="blog-details-wrap mr-40">
                            <div className="blog-details-top">
                                <img src={urlToImage} alt="news-bg-image" />
                                <div className="blog-details-content-wrap">
                                    <div className="b-details-meta-wrap">
                                        <div className="b-details-meta">
                                            <ul>
                                                <li>
                                                    <i className="fa fa-calendar-o"></i>
                                                    {new Intl.DateTimeFormat('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: '2-digit'
                                                    }).format(new Date(publishedAt))}
                                                </li>
                                                <li>
                                                    <i className="fa fa-user"></i>
                                                    {
                                                        newsDetail.author ? newsDetail.author : source.name
                                                    }
                                                </li>
                                                <li>
                                                    <i className="fa fa-comments-o"></i> 10</li>
                                            </ul>
                                        </div>
                                        <span>{source.name}</span>
                                    </div>
                                    <h3>{title}</h3>
                                    <blockquote>
                                        <i className="quote-top fa fa-quote-left"></i>
                                        {description}
                                        <i className="quote-bottom fa fa-quote-right"></i>
                                    </blockquote>
                                    <p>{content}</p>
                                    <div className="blog-share-tags">
                                        <div className="blog-share">
                                            <div className="blog-btn">
                                                <a href="#">
                                                    <i className="fa fa-share-alt"></i>
                                                </a>
                                            </div>
                                            <div className="blog-social">
                                                <ul>
                                                    <li>
                                                        <a className="facebook" href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="instagram" href="#">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="twitter" href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="google" href="#">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-tag">
                                            <ul>
                                                <li>
                                                    <a target="_blank" href={url}>Go to Source >></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="related-course pt-70">
                                <div className="related-title mb-45">
                                    <h3>Related News</h3>
                                    <p>Hempor incididunt ut labore et dolore mm, itation ullamco laboris
                                <br />nisi ut aliquip. </p>
                                </div>
                                <div className="related-slider-active related-blog-slide pb-80">
                                    {
                                        relatedNews.map((report, index) => {
                                            const reportImage = report.urlToImage;
                                            const reportPublishedDate = report.publishedAt;
                                            const contentSource = report.source;
                                            const author = report.author ? report.author : contentSource.name;
                                            const reportTitle = report.title;
                                            const reportDesc = report.description;
                                            const encodedReportTitle = encodeURIComponent(reportTitle);

                                            return (
                                                <div className="single-blog" key={`report-${index}`}>
                                                    <div className="blog-img">
                                                        <a href="#">
                                                            <img src={reportImage} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content-wrap">
                                                        <div className="blog-content">
                                                            <h4>
                                                                <Link to={`/admin/news-details/${encodedReportTitle}`}>{reportTitle}</Link>
                                                            </h4>
                                                            <p className="block-with-text">{reportDesc}</p>
                                                            <div className="blog-meta">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa fa-user"></i>
                                                                            {author}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="blog-date">
                                                            <a href="#">
                                                                <i className="fa fa-calendar-o"></i>
                                                                {new Intl.DateTimeFormat('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: '2-digit'
                                                                }).format(new Date(reportPublishedDate))}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                            <div className="blog-comment">
                                <div className="blog-comment-btn mb-80 commrnt-toggle">
                                    <a href="#">VIEW COMMENT</a>
                                </div>
                                <div className="blog-comment-content-wrap">
                                    <h4>COMMENT</h4>
                                    <div className="single-blog-comment">
                                        <div className="blog-comment-img">
                                            <img src={require('./../../assets/img/blog/blog-comment.jpg')} alt="" />
                                        </div>
                                        <div className="blog-comment-content">
                                            <h5>AYESHA HOQUE</h5>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi
                                        dunt ut laboperspiciatis und.</p>
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                    <div className="single-blog-comment child-comment">
                                        <div className="blog-comment-img">
                                            <img src={require('./../../assets/img/blog/blog-comment-2.jpg')} alt="" />
                                        </div>
                                        <div className="blog-comment-content">
                                            <h5>AYESHA HOQUE</h5>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi
                                        dunt ut laboperspiciatis und.</p>
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                    <div className="single-blog-comment">
                                        <div className="blog-comment-img">
                                            <img src={require('./../../assets/img/blog/blog-comment-3.jpg')} alt="" />
                                        </div>
                                        <div className="blog-comment-content">
                                            <h5>AYESHA HOQUE</h5>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi
                                        dunt ut laboperspiciatis und.</p>
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-comment-area">
                                <h3>Leave A Comment</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="leave-form">
                                                <input placeholder="Name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="leave-form">
                                                <input placeholder="Email" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="leave-form leave-btn">
                                                <textarea placeholder="Message"></textarea>
                                                <input type="submit" value="POST YOUR COMMENT" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <NewsSideBar />
                    </div>
                </div>
            </div>
        </div>
    );

}