import Axios from 'axios';
import { PRODUCTSAPI, PRODUCTS_PER_PAGE } from '../glaxdu-settings';

export const getProducts = (pageNumber) => {
    return new Promise((resolve, reject) => {
        const url = `${PRODUCTSAPI}?_page=${pageNumber}&_limit=${PRODUCTS_PER_PAGE}`;
        Axios.get(url)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    })
}

export const getTotalProductCount = () => {
    return new Promise((resolve, reject) => {
        const url = `${PRODUCTSAPI}`;
        Axios.get(url)
            .then(response => response.data || [])
            .then(data => resolve(data.length))
            .catch(error => reject(error));
    })
}