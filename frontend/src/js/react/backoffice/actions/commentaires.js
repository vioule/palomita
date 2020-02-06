import { 
  FETCH_COMMENTS, 
  FETCH_COMMENTS_VALIDATE, 
  FETCH_COMMENTS_ERROR, 
  SORT_COMMENTS, 
  SHOWALL_COMMENTS,
  DELETE_COMMENTS_VALIDATE 
} from "./actionTypes";
import {showPopup, closePopup} from './popup'; 
const axios = require('axios');

export function fetchCommentsValidate(payload) {
  return {type: FETCH_COMMENTS_VALIDATE, payload}
};

export function fetchCommentsError(payload) {
  return {type: FETCH_COMMENTS_ERROR, payload}
};

export function showAllComments(payload) {
  return {type: SHOWALL_COMMENTS, payload}
};

export function getComments() {
  return (dispatch) => {
    dispatch({type: FETCH_COMMENTS})
    return axios.get('/api/getComments')
    .then(res=>{
      dispatch(fetchCommentsValidate(res.data))
    })
    .catch(err=>dispatch(fetchCommentsError(err)))
  }
};

export function sort(data, sort, type) {
  var content = [];
  var ascending = data.ascending;
  if (data.sort === sort) {
    content = [...data.content].reverse();
    ascending = !ascending;
  } else {
    ascending = false;
    switch(type) {
      case "author":
        content = [...data.content].sort((x,y)=>x[sort].name.localeCompare(y[sort].name));
        break;
      case "date":
        content = [...data.content].sort((x,y)=>new Date(x[sort]) - new Date(y[sort]));
        break;
      case "array":
        content = [...data.content].sort((x,y)=>x[sort].length-y[sort].length);
        break;
      default:
        content = [...data.content].sort((x,y)=>x[sort].title.localeCompare(y[sort].title));
    }
  }
  return {type: SORT_COMMENTS, content, sort, ascending}
};

export function deleteComments(ids, _csrf, parentID) {
  return (dispatch) => {
    dispatch({type: FETCH_COMMENTS})
    return axios.delete('/api/deleteComments', {params: {ids, _csrf, parentID}})
    .then(res=>{
      dispatch({type: DELETE_COMMENTS_VALIDATE});
      dispatch(closePopup());
      setTimeout(()=>dispatch(showPopup({message: "Le commentaire a bien été supprimé.", error: false})),1000);
    })
    .catch(err=>{
      dispatch(fetchCommentsError(err));
      setTimeout(()=>dispatch(showPopup({message: "Une erreur est survenue.", error: true})),1000);
    })
  }
};

export function createAnswer(answer, id, type, _csrf) {
  return (dispatch) => {
    dispatch({type: FETCH_COMMENTS})
    return axios.post('/api/createAnswer', {answer, id, type, _csrf})
    .then(res=>{
      dispatch({type: DELETE_COMMENTS_VALIDATE});
      dispatch(closePopup());
      setTimeout(()=>dispatch(showPopup({message: "Le commentaire a bien été publié.", error: false})),1000);
    })
    .catch(err=>{
      dispatch(fetchCommentsError(err));
      setTimeout(()=>dispatch(showPopup({message: "Une erreur est survenue.", error: true})),1000);
    })
  }
};