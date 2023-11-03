import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import singupReducer from './SignupReducer';
import fetchReducer from './FetchReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  signup : singupReducer,
  users: fetchReducer,
  // other reducers...
});

export default rootReducer;
