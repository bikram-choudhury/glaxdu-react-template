import Axios from 'axios';
import { AUTH_SERVER_URL } from '../glaxdu-settings';

export const saveOrderDetailsAfterCheckout = (order) => {
    return new Promise((resolve, reject) => {
        const url = `${AUTH_SERVER_URL}/processedOrder`;
        Axios.post(url, order)
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}