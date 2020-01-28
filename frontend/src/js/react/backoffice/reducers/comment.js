import { FETCH_COMMENT, FETCH_COMMENT_VALIDATE, FETCH_COMMENT_ERROR } from "../actions/actionTypes";

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  error: "",
  data: {
    author: {name:""},
    date: "",
    content: "",
    parent: "",
    reponse: [],
    type: "comment",
  }
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case FETCH_COMMENT:
      return Object.assign({}, state, {isFetching: true, didInvalidate: false});
    case FETCH_COMMENT_VALIDATE:
      return Object.assign({}, state, {isFetching: false, didInvalidate: false, data: action.payload})
    case FETCH_COMMENT_ERROR:
      return Object.assign({}, state, {isFetching: false, didInvalidate: true, error: action.payload})
    default:
      return state
  };
};