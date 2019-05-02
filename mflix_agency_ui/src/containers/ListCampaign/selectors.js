/**
 * Manager selectors
 */

// import { createSelector } from 'reselect';

const makeListCampaign = (state) => state.get('listCampaign');

export {
    makeListCampaign,
}