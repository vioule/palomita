import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from "./actionTypes";
const axios = require('axios');

export function authLogin(payload) {
  return { type: AUTH_LOGIN, payload }
};
export function authError(payload) {
  return { type: AUTH_ERROR, payload }
};

export function checkAuthentication(){
  return (dispatch) => {
    return axios.get('/api/checkAuthentication')
    .then(res=>{
      res.data.isAuthenticated ?
        dispatch(authLogin(res.data.user)) :
        dispatch({type: AUTH_LOGOUT})}
      )
    .catch(err=>dispatch(authError("Une erreur est survenue.")))
  }
};

export function userLogin(_csrf, username, password){
  return (dispatch) => {
    return axios.post('/api/login', {_csrf, username, password})
    .then(res=>dispatch(authLogin(res.data.user)))
    .catch(err=>dispatch(authError("Email ou mot de passe invalide.")))
  }
};

export function userLogout(){
  return (dispatch) => {
    return axios.get('/api/logout')
    .then(res=>dispatch({type: AUTH_LOGOUT}))
    .catch(err=>dispatch(authError("Une erreur est survenue.")))
  }
};
