import {
    connect
} from 'react-redux'
import {
    compose
} from 'redux'
import ListCampaign from './ListCampaign'
import injectReducer from '../../utils/injectReducer'
import {
    createStructuredSelector
} from 'reselect';
import {
    getAllCampaign
} from './actions'
import {
    makeListCampaign,
} from './selectors'
import reducer from './reducer'

const mapDispatchToProps = (dispatch) => ({
    getAllCampaign: () => dispatch(getAllCampaign()),
})

const mapStateToProps = createStructuredSelector({
    listCampaign: makeListCampaign,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({
    key: 'listCampaign',
    reducer
})

export default compose(withReducer, withConnect)(ListCampaign)
export {
    mapDispatchToProps
}