import { AUTH_SERVER_URL } from "../../glaxdu-settings";
import Axios from 'axios';

export const freeRegisteration = (payload, config) => {
    return dispatch => {
        const URL = `${AUTH_SERVER_URL}/registrations`;
        Axios.post(URL, payload)
            .then(response => console.log("then", response))
            .catch(response => console.log("catch", response))
            .finally(() => {
                config.resetForm();
            })
    }
}