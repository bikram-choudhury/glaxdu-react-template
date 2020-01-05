import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { fetchNewsAction } from '../../redux/actions/news.action';
import { Image_not_found } from '../../glaxdu-settings';

/*
    1. Create Blogs template
    2. Integrate with newsAPI.org API for getting blogs
    3. Do with client-side pagination

    newsAPI APIKey: ba634665e5fc4a9ba409bacb1ef1f862
    // https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-04&sortBy=publishedAt&apiKey=API_KEY
    // https://newsapi.org/v2/everything?q=apple&from=2020-01-03&to=2020-01-03&sortBy=popularity&apiKey=API_KEY
    // https://newsapi.org/v2/everything?domains=wsj.com&apiKey=API_KEY
    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
    // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY

    4. On click of any Blog navigate to blog-details view with Blog id
    5. Show Blog details as per the Blog id
    6. Show the associated comments
    7. Provide a section for adding comments

    8. For everything keep same image as newsAPI.com doesn't provide any image
        (or) generate some random images and add into this
*/

class News extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getNews();
    }
    render() {
        const breadcrumbConfig = {
            title: 'News Grid',
            subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .`,
            templateName: 'News Grid',
            bgImage: 'breadcrumb-bg-5.jpg'
        };
        return (
            <Fragment>
                <Breadcrumb {...breadcrumbConfig} />
                <EventsArea newsList={this.props.newsList} />
            </Fragment>
        )
    }
}

class EventsArea extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            itemsPerPage: 5
        }
    }
    updateCurrentPageNumber = (pageNumber) => {
        this.setState({ currentPage: Number(pageNumber) });
    }
    render() {
        const { currentPage, itemsPerPage } = this.state;
        const totalPageCount = Math.ceil(this.props.newsList.length / this.state.itemsPerPage);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;

        const currentPageItems = this.props.newsList.slice(indexOfFirstItem, indexOfLastItem);
        return (
            <div className="event-area pt-130 pb-130" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="blog-all-wrap mr-40">
                                <div className="row">
                                    {
                                        currentPageItems.map((news, index) => {
                                            return (
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                                    <SingleNews news={news} />
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="pro-pagination-style text-center mt-25">
                                    <Pagination
                                        changePageNumber={this.updateCurrentPageNumber}
                                        itemsPerPage={this.state.itemsPerPage}
                                        currentPage={this.state.currentPage}
                                        totalPageCount={totalPageCount} />
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

function SingleNews(props) {
    const report = props.news;
    return (
        <div className="single-blog mb-30">
            <div className="blog-img">
                <a href="blog-details.html">
                    {
                        report.urlToImage ? (
                            <img src={report.urlToImage} alt="" />
                        ) : (
                                <img src={Image_not_found} alt="" />
                            )
                    }
                </a>
            </div>
            <div className="blog-content-wrap">
                <div className="blog-content">
                    <h4><a href="blog-details.html">{report.title}</a></h4>
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

function mapStateToProps(state) {
    return {
        newsList: state.news && state.news.list || []
    };
}

function dispatchToProps(dispatch) {
    return {
        getNews: () => {
            dispatch(fetchNewsAction());
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(News)