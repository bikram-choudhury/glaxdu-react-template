import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination.jsx';
import SingleNews from './SingleNews.jsx';
import { fetchNewsAction } from '../../redux/actions/news.action';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 5
        }
    }
    componentDidMount() {
        console.log("componentDidMount: ", this.props);
        this.props.getNews(this.props.searchCategory);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.searchCategory !== this.props.searchCategory 
            // nextProps.newsList.length !== this.props.newsList.length
        );
    }
    componentDidUpdate() {
        console.log("componentDidUpdate: ", this.props);
        this.props.getNews(this.props.searchCategory);
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
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        newsList: state.news && state.news.list || []
    };
}

function dispatchToProps(dispatch) {
    return {
        getNews: (category = "") => {
            dispatch(fetchNewsAction(category));
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(NewsList);
