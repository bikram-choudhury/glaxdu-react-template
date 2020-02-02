import Axios from 'axios';
import { PRODUCTSAPI } from '../glaxdu-settings';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        Axios.get(PRODUCTSAPI)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    })
}