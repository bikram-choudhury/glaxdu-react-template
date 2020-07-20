import Axios from "axios";
import { NEWSAPI, NEWSAPI_KEY } from "../glaxdu-settings";

export const fetchNews = (tag = '') => {
    let url = `${NEWSAPI}/top-headlines?country=in&apiKey=${NEWSAPI_KEY}`;
    if (tag) {
        url += `&category=${tag}`;
    }
    return new Promise((resolve, reject) => {
        Axios.get(url)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
}