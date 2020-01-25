import { combineReducers } from "redux";
import * as news from "./news.reducer";

export const reducers = combineReducers({ news: news.NewsReducer });

export const getNewsTag = (state) => news.getNewsTag(state.news);
export const getNewsList = (state) => news.getNewsList(state.news);