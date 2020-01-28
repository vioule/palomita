import { combineReducers } from 'redux';
import csrfReducer from './csrf';
import loginReducer from './auth';
import menuReducer from './menu';
import articlesReducer from './articles';
import commentsReducer from './comments';

export default combineReducers({
  _csrf: csrfReducer,
  login: loginReducer,
  menu: menuReducer,
  articles: articlesReducer,
  comments: commentsReducer
});
