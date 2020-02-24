import Axios from 'axios';
import { AUTH_SERVER_URL } from '../glaxdu-settings';

export const addProductToCart = (product) => {
    return new Promise((resolve, reject) => {
        const url = `${AUTH_SERVER_URL}/cartItems`;
        Axios.post(url, product)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    })
}

export const removeProductFromCart = (cartItemId) => {
    return new Promise((resolve, reject) => {
        const url = `${AUTH_SERVER_URL}/cartItems/${cartItemId}`;
        Axios.delete(url)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    })
}