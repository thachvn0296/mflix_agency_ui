import {
    GET_CAMPAIGN_FAIL,
    GET_CAMPAIGN_SUCCESS,
} from './constants';

import { Cookies } from 'react-cookie';
import axios from 'axios';

const cookies = new Cookies();

export const getCampaign = (id) => {
    const authorization = 'Bearer ' +  cookies.get('Authorization');
    return dispatch => new Promise((
        resolve,
        reject
    ) => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://103.74.123.74:8080/VideoRedirect/rest/campaign/load/${id}`, {
            headers: {
                'Authorization': authorization,
            }
        })
            .then(resp => {
                if (resp.status === 200 && resp.data.status === 'success') {
                    return resolve(dispatch(getCampaignSuccess(resp.data.entity)));
                } else {
                    return reject(dispatch(getCampaignFall(resp.data.message)));
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        cookies.remove('Authorization');
                        return reject(dispatch(getCampaignFall("Unauthorized")))
                    }
                    return reject(dispatch(getCampaignFall(err.response.data.message)))
                } else {
                    return reject(dispatch(getCampaignFall(err.message)))
                }
            })
    });
}

export const getCampaignSuccess = (data) => {
    return {
        data,
        type: GET_CAMPAIGN_SUCCESS,
    };
}

export const getCampaignFall = (message) => {
    return {
        message,
        type: GET_CAMPAIGN_FAIL,
    }
}