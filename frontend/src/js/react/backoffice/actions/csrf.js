import { SET_CSRF_TOKEN } from "./actionTypes";

export function setCsrfToken(_csrf){
  return { type: SET_CSRF_TOKEN, _csrf }
};