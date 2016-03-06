import { combineReducers } from 'redux';
import { SITE_LOADED } from '../constants';

function siteReducer(state = {}, action) {
  switch (action.type) {
  case SITE_LOADED:
    console.log('Site Loaded');
    return state;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  site: siteReducer
});

export default rootReducer;
