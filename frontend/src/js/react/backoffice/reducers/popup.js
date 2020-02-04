import { SHOW_POPUP, CLOSE_POPUP } from "../actions/actionTypes";

const DEFAULT_STATE = {
  show: false,
  message: "",
  error: false
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SHOW_POPUP:
      return Object.assign({}, state, {show: true, ...action.payload});
    case CLOSE_POPUP:
      return Object.assign({}, state, {show: false});
    default:
      return state
  };
};