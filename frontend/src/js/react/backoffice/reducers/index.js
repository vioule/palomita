import { combineReducers } from 'redux';
import csrfReducer from './csrf';
import loginReducer from './auth';

export default combineReducers({
  _csrf: csrfReducer,
  login: loginReducer
});
