import { SET_NEWS, SET_NEWS_ERROR, SET_TAG, REPLACE_NEWS } from "../action.type.constants";
import { fetchNews } from "../../api/news.api";

export function setNewsAction(ListOfNews) {
    return {
        type: SET_NEWS,
        payload: { list: ListOfNews }
    }
}

export function setNewsErrorAction(errorMessage) {
    return {
        type: SET_NEWS_ERROR,
        payload: { error: errorMessage }
    }
}

export function replaceNewsAction(ListOfNews) {
    return {
        type: REPLACE_NEWS,
        payload: { list: ListOfNews }
    }
}

export function setNewsTagAction(tag) {
    return {
        type: SET_TAG,
        payload: { tag }
    }
}
export const setAndFetchNewsOnTag = (newsTag) => {
    return (dispatch, getState) => {
        dispatch(setNewsTagAction(newsTag));
        fetchNews(newsTag)
            .then(response => response && dispatch(replaceNewsAction(response.articles)))
            .catch(error => dispatch(setNewsErrorAction(error.message)))
    }
}

export const fetchNewsAction = (newsTag) => {
    return function (dispatch, getState) {
        fetchNews(newsTag)
            .then(response => response && dispatch(replaceNewsAction(response.articles)))
            .catch(error => dispatch(setNewsErrorAction(error.message)))
    }
}