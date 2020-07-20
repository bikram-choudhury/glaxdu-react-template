import Axios from "axios";
import { AUTH_SERVER_URL } from "../glaxdu-settings";

export const fetchNews = (tag = '') => {
    const url = `${AUTH_SERVER_URL}/news?tag=${tag}`;
    return new Promise((resolve, reject) => {
        Axios.get(url)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
}