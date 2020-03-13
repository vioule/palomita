import { 
  SET_ARTICLES_CONTENT,
  SET_FILTER_CATEGORIE,
  ADD_ARTICLES_SHOW
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  show: [],
  content: [],
  filter: []
};

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_ARTICLES_CONTENT:
      return Object.assign({}, state, {content: action.payload, filter: action.payload, show: action.payload.slice(0,2)});
    case SET_FILTER_CATEGORIE:
      return action.payload ?
      Object.assign({}, state, {filter: state.content.filter(el=>el.categorie==action.payload), show: state.content.filter(el=>el.categorie==action.payload).slice(0,5)}) :
      Object.assign({}, state, {filter: state.content, show: state.content.slice(0,5)})
    case ADD_ARTICLES_SHOW:
      return Object.assign({}, state, {show: state.filter.slice(0,state.show.length+5)})
    default:
      return state
  };
};