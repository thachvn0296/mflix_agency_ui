/**
 * Manager selectors
 */

// import { createSelector } from 'reselect';

const makeCampaignDetail = (state) => state.get('campaignDetail');

export {
    makeCampaignDetail,
}