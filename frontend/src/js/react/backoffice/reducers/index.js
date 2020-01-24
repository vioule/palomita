import { combineReducers } from 'redux';
import csrfReducer from './csrf';
import loginReducer from './auth';
import menuReducer from './menu';
import articlesReducer from './articles';

export default combineReducers({
  _csrf: csrfReducer,
  login: loginReducer,
  menu: menuReducer,
  articles: articlesReducer
});
