import {
    GET_LIST_CAMPAIGN_SUCCESS,
    GET_LIST_CAMPAIGN_FAIL,
} from './constants';

const reducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_LIST_CAMPAIGN_SUCCESS:
            newState = {
                err: false,
                campaigns: action.campaigns,
            }
            break;
        case GET_LIST_CAMPAIGN_FAIL:
            newState = {
                err: true,
                message: action.message,
            }
            break;
        default:
            return state;
    }
    return newState;
}

export default reducer;