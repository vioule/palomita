import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from "../actions/actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: null,
  user: {
    username: '',
    role: {
      name: ""
    }
  },
  errorMessage: ''
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case AUTH_LOGIN:
      return {user: action.payload, isAuthenticated: true, errorMessage: ''}
    case AUTH_LOGOUT:
      return Object.assign({}, DEFAULT_STATE, {isAuthenticated: false});
    case AUTH_ERROR:
      return Object.assign({}, DEFAULT_STATE, {isAuthenticated: false, errorMessage: action.payload});
    default:
      return state
  };
};