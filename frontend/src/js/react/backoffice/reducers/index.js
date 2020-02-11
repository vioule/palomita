import { combineReducers } from 'redux';
import csrfReducer from './csrf';
import loginReducer from './auth';
import menuReducer from './menu';
import articlesReducer from './articles';
import articleReducer from './article/';
import commentsReducer from './comments';
import commentReducer from './comment';
import answerReducer from './answer';
import searchReducer from './search';
import popupReducer from './popup';

export default combineReducers({
  _csrf: csrfReducer,
  login: loginReducer,
  menu: menuReducer,
  articles: articlesReducer,
  article: articleReducer,
  comments: commentsReducer,
  comment: commentReducer,
  answer: answerReducer,
  search: searchReducer,
  popup: popupReducer
});
