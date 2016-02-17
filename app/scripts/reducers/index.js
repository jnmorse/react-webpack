import { combineReducers } from 'redux';

function baseReducer (state, action) {
  return state;
}

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
