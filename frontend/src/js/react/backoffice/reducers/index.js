import { combineReducers } from 'redux';
import csrfReducer from './csrf';
import loginReducer from './auth';
import menuReducer from './menu';

export default combineReducers({
  _csrf: csrfReducer,
  login: loginReducer,
  menu: menuReducer
});
