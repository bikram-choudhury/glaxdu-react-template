import { combineReducers } from "redux";
import { createSelector } from 'reselect';
import * as news from "./news.reducer";

export const reducers = combineReducers({ news: news.NewsReducer });

const getSelectedNewsTitle = (state) => news.getSelectedNewsTitle(state.news);

export const getNewsTag = (state) => news.getNewsTag(state.news);
export const getNewsList = (state) => news.getNewsList(state.news);
export const getSelectedNews = createSelector(
    getNewsList,
    getSelectedNewsTitle,
    (newsList, selectedTitle) => newsList.find(adhoc => adhoc.title === selectedTitle)
);
export const getReletedNewsList = createSelector(
    getNewsList,
    getSelectedNews,
    (newsList, selectedNews) => {
        const relatedNewsList = newsList.filter(adhoc => adhoc.source.name === selectedNews.source.name);
        return relatedNewsList.slice(0, 5);
    }
);