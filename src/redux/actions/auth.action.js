import { SET_TOKENS } from "../action.type.constants";
import Axios from 'axios';
import { AUTH_SERVER_URL } from "../../glaxdu-settings";

export const setTokens = (tokens) => {
    return {
        type: SET_TOKENS,
        payload: { ...tokens }
    }
}

export const saveUser = (user, { setSubmitting, history }) => {
    return (dispatch, getState) => {
        setSubmitting(true);

        if (user && Object.keys(user).length) {
            const URL = `${AUTH_SERVER_URL}/auth/register`;
            Axios.post(URL, user)
                .then(response => {
                    const { data } = response;
                    const tokens = {
                        accessToken: data.access_token,
                        refreshToken: data.refresh_token,
                        tokenType: data.token_type,
                    };
                    dispatch(setTokens(tokens));
                    history.push('/admin/home');
                })
                .catch(error => {
                    if (error.response) {
                        console.error(error.response.data.message);
                    }
                })
                .finally(() => {
                    setSubmitting(false);
                })
        }
    }
}