import axios from 'axios';
import { Cookies } from 'react-cookie';

import {
    GET_LIST_CAMPAIGN_SUCCESS,
    GET_LIST_CAMPAIGN_FAIL,
} from './constants'

const cookies = new Cookies();

export const getAllCampaign = () => {
    const authorization = 'Bearer ' +  cookies.get('Authorization');
    return dispatch => new Promise((resolve, reject) => {
        axios.request({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/http://103.74.123.74:8080/VideoRedirect/rest/campaign/loadAll',
            headers: {
                'Authorization': authorization,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return resolve(dispatch(getAllCampaignSuccess(response.data.entity)));
                } else {
                    return reject(dispatch(getAllCampaignFail(response.data.message)))
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        cookies.remove('Authorization');
                        return reject(dispatch(getAllCampaignFail("Unauthorized")))
                    }
                    return reject(dispatch(getAllCampaignFail(err.response.data.message)))
                }  else {
                    return reject(dispatch(getAllCampaignFail(err.message)))
                }
            });
    })
}

const getAllCampaignSuccess = (campaigns) => {
    return {
        type: GET_LIST_CAMPAIGN_SUCCESS,
        campaigns,
    }
}

const getAllCampaignFail = (message) => {
    return {
        type: GET_LIST_CAMPAIGN_FAIL,
        message,
    }
}