import { SET_TOKENS, LOGOUT } from "../action.type.constants";
import Axios from 'axios';
import { AUTH_SERVER_URL } from "../../glaxdu-settings";
import { getSavedProductsFromCart } from "./cart.action";

export const setTokens = (tokens) => {
    return {
        type: SET_TOKENS,
        payload: { ...tokens }
    }
}

export const logout = () => {
    return { type: LOGOUT };
};

const dispatchedMethodForAuthentication = (dispatch, URL, user, config) => {
    config.setSubmitting(true);

    if (user && Object.keys(user).length) {
        Axios.post(URL, user)
            .then(response => {
                const { data } = response;
                const tokens = {
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                    tokenType: data.token_type,
                };
                dispatch(setTokens(tokens));
                dispatch(getSavedProductsFromCart());
                config.history.push('/admin/home');
            })
            .catch(error => {
                if (error.response) {
                    console.error(error.response.data.message);
                }
                config.setSubmitting(false);
            })
    }
}

export const saveUser = (user, config) => {
    return (dispatch, getState) => {
        const URL = `${AUTH_SERVER_URL}/auth/register`;
        dispatchedMethodForAuthentication.call(null, dispatch, URL, user, config)
    }
}

export const authenticateUser = (user, config) => {
    return (dispatch) => {
        const URL = `${AUTH_SERVER_URL}/auth/login`;
        dispatchedMethodForAuthentication.call(null, dispatch, URL, user, config)
    }
}

