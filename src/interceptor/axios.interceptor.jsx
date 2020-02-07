import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

function AxiosInterceptor(props) {
    const { auth } = props;
    const [authInterceptor, setAuthInterceptor] = useState(null);
    const [errorInterceptor, setErrorInterceptor] = useState(null);

    // Request Interceptor
    const addAuthInterceptor = () => {
        const authInterceptor = Axios.interceptors.request.use(
            config => {
                if (!(config.headers && config.headers.Authorization)) {
                    config.headers['Authorization'] = auth.accessToken;
                }
                return config;
            }, error => Promise.reject(error));

        setAuthInterceptor(authInterceptor);
    }
    const removeAuthInterceptor = () => {
        Axios.interceptors.request.eject(authInterceptor);
        setAuthInterceptor(null);
    }

    // Response Interceptor
    const addErrorInterceptor = () => {
        const errorInterceptor = Axios.interceptors.response.use(
            response => response, 
            error => {
                if(error.response) {
                    let message = "Something went wrong.";
                    const {status} = error.response;
                    if(status === 401) {
                        // prompt for login
                    } else if(status === 403) {
                        message = "You’re not authorized to do that.";
                    } else {
                        message = error.message;
                    }
                } else {
                    return Promise.reject(error);
                }
            }
        );
        setErrorInterceptor(errorInterceptor);
    }; 
    
    const removeErrorInterceptor = () => {
        Axios.interceptors.response.eject(errorInterceptor);
        setErrorInterceptor(null);
    }

    useEffect(() => {
        addAuthInterceptor();
        addErrorInterceptor();
        return () => {
            removeAuthInterceptor();
            removeErrorInterceptor();
        }
    }, [])
    return null;
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(AxiosInterceptor);