import { SET_NEWS, SET_NEWS_ERROR, SET_TAG, REPLACE_NEWS } from "../action.type.constants";
import Axios from "axios";
import { NEWSAPI, NEWSAPI_KEY } from "../../glaxdu-settings";

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
        const url = `${NEWSAPI}/top-headlines?country=in&category=${newsTag}&apiKey=${NEWSAPI_KEY}`;
        Axios.get(url)
            .then(response => response.data)
            .then(response => response && dispatch(replaceNewsAction(response.articles)))
            .catch(error => dispatch(setNewsErrorAction(error.message)))
    }
}

export const fetchNewsAction = () => {
    return function (dispatch, getState) {
        const url = `${NEWSAPI}/top-headlines?country=in&apiKey=${NEWSAPI_KEY}`;
        Axios.get(url)
            .then(response => response.data)
            .then(response => response && dispatch(setNewsAction(response.articles)))
            .catch(error => dispatch(setNewsErrorAction(error.message)))
    }
}