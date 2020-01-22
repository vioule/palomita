import { SET_CSRF_TOKEN } from "../actions/actionTypes";

export default (state="", action) => {
  switch(action.type) {
    case (SET_CSRF_TOKEN):
      return action._csrf
    default:
      return state
  };
};