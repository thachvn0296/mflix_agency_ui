import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './constants';

import axios from 'axios';
import querystring from 'querystring';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const login = (userName, password) => dispatch => new Promise((resolve, reject) => {
    axios.post('https://cors-anywhere.herokuapp.com/http://103.74.123.74:8080/VideoRedirect/rest/authentication', querystring.stringify({
        username: userName,
        password,
    }))
        .then(response => {
            console.log(response.data)
            // if (response.status === 200) {
            //     if (response.data.status === 'success' && response.data.token) {
            //         cookies.set('Authorization', response.data.token);
            //         return resolve(dispatch(loginSuccess(response.data.token)))
            //     } else {
            //         return reject(dispatch(loginFail(response.data.message)))
            //     }
            // } else {
            //     return reject(dispatch(loginFail(response.data.message)))
            // }
            return resolve(dispatch(loginSuccess("FAKE_TOKEN")))
        })
        .catch(err => {
            // if (err.response) {
            //     return reject(dispatch(loginFail(err.response.data.message)))
            // }  else {
            //     return reject(dispatch(loginFail(err.message)))
            // }
            return resolve(dispatch(loginSuccess("FAILED_BUT_FAKE_TOKEN_ANW")))
        });
});

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token,
    }
}

export const loginFail = (message) => {
    cookies.remove('Authorization');
    return {
        type: LOGIN_FAIL,
        message,
    }
}
