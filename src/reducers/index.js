import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import singupReducer from './SignupReducer';
import fetchReducer from './FetchReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  signup : singupReducer,
  users: fetchReducer,
  login: loginReducer
  // other reducers...
});

export default rootReducer;
