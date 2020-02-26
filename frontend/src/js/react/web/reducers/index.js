import { combineReducers } from 'redux';
import menu from './menu';
import articles from './articles';
import filter from './filter';

export default combineReducers({
  menu,
  articles,
  filter
});
