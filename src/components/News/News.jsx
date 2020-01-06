import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import NewsSideBar from './NewsSidebar.jsx';
import { fetchNewsAction } from '../../redux/actions/news.action';
import { Image_not_found } from '../../glaxdu-settings';

/*

    newsAPI APIKey: ba634665e5fc4a9ba409bacb1ef1f862
    // https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-04&sortBy=publishedAt&apiKey=API_KEY
    // https://newsapi.org/v2/everything?q=apple&from=2020-01-03&to=2020-01-03&sortBy=popularity&apiKey=API_KEY
    // https://newsapi.org/v2/everything?domains=wsj.com&apiKey=API_KEY
    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
    // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY

    1. create a separate component for right side section
    2. On click of any Blog navigate to blog-details view with Blog id
    3. Show Blog details as per the Blog id
    4. implement news search functionality and the url should navigate back to news grid view
        - take the search query from URL and give result as per that
        - If search query is not found then give result for top-headlines 
    6. Show the associated comments
    7. Provide a section for adding comments

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
                            <NewsSideBar />
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