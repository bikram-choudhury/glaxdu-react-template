import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination.jsx';
import SingleNews from './SingleNews.jsx';
import { fetchNewsAction } from '../../redux/actions/news.action';
import { getNewsTag, getNewsList } from '../../redux/reducers';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 6
        }
    }
    componentDidMount() {
        const { newsList, newsTag } = this.props;
        newsList.length === 0 && this.props.getNews(newsTag);
    }
    updateCurrentPageNumber = (pageNumber) => {
        this.setState({ currentPage: Number(pageNumber) });
    }
    render() {
        const { currentPage, itemsPerPage } = this.state;
        const { newsList, newsTag } = this.props;
        const totalPageCount = Math.ceil(newsList.length / itemsPerPage);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;

        const currentPageItems = newsList.slice(indexOfFirstItem, indexOfLastItem);
        return (
            <div className="blog-all-wrap mr-40">
                {
                    newsTag && (
                        <span>Result Searched for <b>{newsTag}</b></span>
                    )
                }
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
        )
    }
}

function mapStateToProps(state) {
    return {
        newsTag: getNewsTag(state),
        newsList: getNewsList(state)
    };
}

function dispatchToProps(dispatch) {
    return {
        getNews: (category) => {
            dispatch(fetchNewsAction(category));
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(NewsList);
