import { 
  SET_ARTICLES_CONTENT,
  SET_FILTER_CATEGORIE
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  content: [],
  filter: []
};

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_ARTICLES_CONTENT:
      return Object.assign({}, state, {content: action.payload, filter: action.payload});
    case SET_FILTER_CATEGORIE:
      return Object.assign({}, state, {filter: state.content.filter(el=>el.categorie==action.payload)});
    default:
      return state
  };
};