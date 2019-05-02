import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './constants';

const reducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState =  {
                err: false,
                token: action.token,
            }
            break;
        case LOGIN_FAIL:
            newState = {
                err: true,
                message: action.message,
            }
            break;
        default:
            return { }
    }
    return newState;
}
export default reducer;