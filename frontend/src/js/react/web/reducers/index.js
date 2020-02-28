import { combineReducers } from 'redux';
import menu from './menu';
import articles from './articles';
import article from './article';
import filter from './filter';
import comments from './comments';

export default combineReducers({
  menu,
  articles,
  article,
  comments,
  filter
});
