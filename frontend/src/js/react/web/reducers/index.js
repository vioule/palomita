import { combineReducers } from 'redux';
import menu from './menu';
import articles from './articles';
import article from './article';
import filter from './filter';

export default combineReducers({
  menu,
  articles,
  article,
  filter
});
