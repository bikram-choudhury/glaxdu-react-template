import { SET_NEWS, SET_NEWS_ERROR } from "../action.type.constants";
import Axios from "axios";
import { NEWSAPI, NEWSAPI_KEY } from "../../glaxdu-settings";

export function setNewsAction(ListOfNews) {
    return {
        type: SET_NEWS,
        payload: ListOfNews
    }
}

export function setNewsErrorAction(errorMessage) {
    return {
        type: SET_NEWS_ERROR,
        payload: errorMessage
    }
}

export const fetchNewsAction = (dispatch) => {
    return function () {
        const url = `${NEWSAPI}/top-headlines?country=in&apiKey=${NEWSAPI_KEY}`;
        Axios.get(url)
        .then(response => setNewsAction(response.data))
        .catch(error => setNewsErrorAction(error.message))
    }
}