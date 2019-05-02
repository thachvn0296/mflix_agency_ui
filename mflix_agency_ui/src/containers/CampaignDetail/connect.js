import {
    connect
} from 'react-redux';
import {
    compose
} from 'redux';
import injectReducer from '../../utils/injectReducer'

import CampaignDetail from './CampaignDetail';
import {
    getCampaign
} from './actions';
import {
    makeCampaignDetail
} from './selector';
import reducer from './reducers';
import {
    createStructuredSelector
} from 'reselect';

const mapDispatchToProps = (dispatch) => ({
    getCampaign: (id) => dispatch(getCampaign(id)),
})

const mapStateToProps = createStructuredSelector({
    campaignDetail: makeCampaignDetail,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({
    key: 'campaignDetail',
    reducer
})

export default compose(withReducer, withConnect)(CampaignDetail)
export {
    mapDispatchToProps
}