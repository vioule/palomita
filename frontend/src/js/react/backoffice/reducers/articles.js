import { FETCH_ARTICLES, FETCH_ARTICLES_VALIDATE, FETCH_ARTICLES_ERROR, SORT_ARTICLES } from "../actions/actionTypes";

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  error: "",
  data: {
    content: [],
    sort: "title",
    ascending: true
  }
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case FETCH_ARTICLES:
      return Object.assign({}, state, {isFetching: true, didInvalidate: false});
    case FETCH_ARTICLES_VALIDATE:
      return Object.assign({}, state, {isFetching: false, didInvalidate: false, data: {content: action.payload, sort: DEFAULT_STATE.data.sort, ascending: DEFAULT_STATE.data.ascending}})
    case FETCH_ARTICLES_ERROR:
      return Object.assign({}, state, {isFetching: false, didInvalidate: true, error: action.payload})
    case SORT_ARTICLES:
      return Object.assign({}, state, { data: {content: action.content, sort: action.sort, ascending: action.ascending} })
    default:
      return state
  };
};