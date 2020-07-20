import React, { Component, Fragment } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';
import NewsList from './NewsList/NewsList.jsx';
import BrnadLogoArea from '../BrnadLogo/BrnadLogoArea.jsx';
import NewsSideBar from './NewsSidebar.jsx';
import ErrorBoundary from '../../error-handling/ErrorBoundary.jsx';

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
                <div className="event-area pt-130 pb-130" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <ErrorBoundary>
                                    <NewsList />
                                </ErrorBoundary>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <NewsSideBar />
                            </div>
                        </div>
                    </div>
                </div>
                <BrnadLogoArea />
            </Fragment>
        )
    }
}

export default News;