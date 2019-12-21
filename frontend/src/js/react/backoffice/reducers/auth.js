import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "../actions/actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: null,
  user: {
    username: ''
  },
  errorMessage: ''
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case AUTH_LOGIN:
      return {user: {username: action.payload.username}, isAuthenticated: true, errorMessage: ''}
    case AUTH_LOGOUT:
      return Object.assign({}, DEFAULT_STATE, {isAuthenticated: false});
    case AUTH_ERROR:
      return Object.assign({}, DEFAULT_STATE, {isAuthenticated: false, errorMessage: action.payload});
    case AUTH_CHECK:
      return Object.assign({}, state, {isAuthenticated: action.payload});
    default:
      return state
  };
};