import { SET_SEARCH_CONTENT, SET_SEARCH_TYPE, SET_SEARCH_FILTERS } from "../actions/actionTypes";

const DEFAULT_STATE = {
  content: "",
  type: "title",
  new: false,
  own: false
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_CONTENT:
      return Object.assign({}, state, {content: action.payload})
    case SET_SEARCH_TYPE:
      return Object.assign({}, state, {type: action.payload})
    case SET_SEARCH_FILTERS:
      return Object.assign({}, state, {...action.payload})
    default:
      return state
  };
};