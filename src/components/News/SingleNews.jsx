import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Image_not_found } from '../../glaxdu-settings';
import { setNewsTitleAction } from '../../redux/actions/news.action';

function SingleNews(props) {
    const report = props.news;
    const history = useHistory();
    const goToNewsDetail = (title) => {
        if (title) {
            props.setNewsTitle(title);
            history.push('news-details');
        }
    }
    return (
        <div className="single-blog mb-30">
            <div className="blog-img">
                <Link to={`#`} onClick={() => goToNewsDetail(report.title)}>
                    {
                        report.urlToImage ? (
                            <img src={report.urlToImage} alt="" />
                        ) : (
                                <img src={Image_not_found} alt="" />
                            )
                    }
                </Link>
            </div>
            <div className="blog-content-wrap">
                <div className="blog-content">
                    <h4><Link to={`#`} onClick={() => goToNewsDetail(report.title)}>{report.title}</Link></h4>
                    <p className="block-with-text">{report.description}</p>
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <a href="#"><i className="fa fa-user"></i>
                                    {
                                        report.author ? report.author : report.source.name
                                    }
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
                        }).format(new Date(report.publishedAt))}
                    </a>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewsTitle: (title) => dispatch(setNewsTitleAction(title))
    }
}
export default connect(null, mapDispatchToProps)(SingleNews);