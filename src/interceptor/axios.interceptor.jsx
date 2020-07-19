import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

function AxiosInterceptor(props) {
    const { auth } = props;
    const [authInterceptor, setAuthInterceptor] = useState(null);
    const [errorInterceptor, setErrorInterceptor] = useState(null);

    // Request Interceptor
    const addAuthInterceptor = useCallback(() => {
        const authInterceptor = Axios.interceptors.request.use(
            config => {
                if (!(config.headers && config.headers.Authorization)) {
                    config.headers['Authorization'] = `${auth.tokenType} ${auth.accessToken}`;
                }
                return config;
            }, error => Promise.reject(error));

        setAuthInterceptor(authInterceptor);
    }, [auth.tokenType, auth.accessToken]);

    const removeAuthInterceptor = useCallback(() => {
        Axios.interceptors.request.eject(authInterceptor);
        setAuthInterceptor(null);
    }, [authInterceptor]);

    // Response Interceptor
    const addErrorInterceptor = useCallback(() => {
        const errorInterceptor = Axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response) {
                    let message = "Something went wrong.";
                    const { status } = error.response;
                    if (status === 401) {
                        // prompt for login
                    } else if (status === 403) {
                        message = "You’re not authorized to do that.";
                    } else {
                        message = error.message;
                    }
                    return Promise.reject({ status, message });
                } else {
                    return Promise.reject(error);
                }
            }
        );
        setErrorInterceptor(errorInterceptor);
    }, []);

    const removeErrorInterceptor = useCallback(() => {
        Axios.interceptors.response.eject(errorInterceptor);
        setErrorInterceptor(null);
    }, [errorInterceptor]);

    useEffect(() => {
        addAuthInterceptor();
        addErrorInterceptor();
        return () => {
            removeAuthInterceptor();
            removeErrorInterceptor();
        }
    }, [addAuthInterceptor, addErrorInterceptor]);
    return null;
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(AxiosInterceptor);