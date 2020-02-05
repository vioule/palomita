import { 
  FETCH_COMMENTS, 
  FETCH_COMMENTS_VALIDATE, 
  FETCH_COMMENTS_ERROR, 
  SORT_COMMENTS, 
  SHOWALL_COMMENTS,
  DELETE_COMMENTS_VALIDATE 
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  error: "",
  showAll: false,
  data: {
    content: [],
    sort: "parent",
    ascending: true
  }
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, {isFetching: true, didInvalidate: false});
    case DELETE_COMMENTS_VALIDATE:
      return Object.assign({}, state, {isFetching: false, didInvalidate: false});
    case FETCH_COMMENTS_VALIDATE:
      return Object.assign({}, state, {isFetching: false, didInvalidate: false, data: {content: action.payload, sort: DEFAULT_STATE.data.sort, ascending: DEFAULT_STATE.data.ascending}})
    case FETCH_COMMENTS_ERROR:
      return Object.assign({}, state, {isFetching: false, didInvalidate: true, error: action.payload})
    case SORT_COMMENTS:
      return Object.assign({}, state, { data: {content: action.content, sort: action.sort, ascending: action.ascending} })
    case SHOWALL_COMMENTS:
      return Object.assign({}, state, {showAll: action.payload})
    default:
      return state
  };
};