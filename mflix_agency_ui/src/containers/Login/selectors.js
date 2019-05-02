/**
 * Manager selectors
 */

// import { createSelector } from 'reselect';

const makeLogin = (state) => state.get('login');

export {
    makeLogin,
};
