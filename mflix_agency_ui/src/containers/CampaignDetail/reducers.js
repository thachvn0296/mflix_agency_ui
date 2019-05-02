import {
    GET_CAMPAIGN_FAIL,
    GET_CAMPAIGN_SUCCESS,
} from './constants';

const reducer = (state = {}, action) => {
    let result = {};
    console.log(action);
    console.log("OK")
    switch (action.type) {
        case GET_CAMPAIGN_SUCCESS: {
            result = {
                err: false,
                campaign: action.data
            };
            break;
        }
        case GET_CAMPAIGN_FAIL: {
            result = {
                err: true,
                message: action.message,
            };
            break;
        }
        default:
            result = state;
    }
    return result;
}

export default reducer;