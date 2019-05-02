import {
    connect
} from 'react-redux'
import {
    compose
} from 'redux'
import Login from './Login'
import injectReducer from '../../utils/injectReducer'
import {
    createStructuredSelector
} from 'reselect';
import {
    login
} from './actions'
import {
    makeLogin,
} from './selectors'
import reducer from './reducer'

const mapDispatchToProps = (dispatch) => ({
    login: (userName, password) => dispatch(login(userName, password)),
})

const mapStateToProps = createStructuredSelector({
    loginPage: makeLogin,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({
    key: 'login',
    reducer
})

export default compose(withReducer, withConnect)(Login)
export {
    mapDispatchToProps
}