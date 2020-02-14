import { 
  FETCH_ARTICLES, 
  FETCH_ARTICLES_VALIDATE, 
  FETCH_ARTICLES_ERROR, 
  SORT_ARTICLES,
  DELETE_ARTICLE_VALIDATE,
  SET_COMMENTS_CONTENT 
} from "./actionTypes";
const axios = require('axios');
import {showPopup, closePopup} from './popup'; 

export function fetchArticlesValidate(payload) {
  return {type: FETCH_ARTICLES_VALIDATE, payload}
};

export function fetchArticlesError(payload) {
  return {type: FETCH_ARTICLES_ERROR, payload}
};

export function getArticles() {
  return (dispatch) => {
    dispatch({type: FETCH_ARTICLES})
    return axios.get('/api/getArticles')
    .then(res=>{
      dispatch(fetchArticlesValidate(res.data))
    })
    .catch(err=>dispatch(fetchArticlesError(err)))
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
      case "date":
        content = [...data.content].sort((x,y)=>new Date(x[sort]) - new Date(y[sort]));
        break;
      case "array":
        content = [...data.content].sort((x,y)=>x[sort].length-y[sort].length);
        break;
      default:
        content = [...data.content].sort((x,y)=>x[sort].localeCompare(y[sort]));
    }
  }
  return {type: SORT_ARTICLES, content, sort, ascending}
};

export function deleteArticle(id, comments, _csrf) {
  return (dispatch) => {
    dispatch({type: FETCH_ARTICLES})
    return axios.delete('/api/deleteArticle', {params: {id, comments, _csrf}})
    .then(res=>{
      dispatch({type: DELETE_ARTICLE_VALIDATE});
      dispatch({type: SET_COMMENTS_CONTENT, content: res.data});
      dispatch(closePopup());
      setTimeout(()=>dispatch(showPopup({message: "L'article a bien été supprimé.", error: false})),1000);
    })
    .catch(err=>{
      dispatch(fetchArticlesError(err));
      dispatch(closePopup())
      setTimeout(()=>dispatch(showPopup({message: "Une erreur est survenue.", error: true})),1000);
    })
  }
};

export function createArticle(article, _csrf) {
  return (dispatch) => {
    dispatch({type: FETCH_ARTICLES})
    return axios.post('/api/createArticle', {article, _csrf})
    .then(res=>{
      dispatch(fetchArticlesValidate(res.data));
      dispatch(closePopup());
      setTimeout(()=>dispatch(showPopup({message: "L'article a bien été publié.", error: false})),1000);
    })
    .catch(err=>{
      dispatch(fetchArticlesError(err));
      dispatch(closePopup())
      setTimeout(()=>dispatch(showPopup({message: "Une erreur est survenue.", error: true})),1000);
    })
  }
};

export function updateArticle(article, _csrf) {
  return (dispatch) => {
    dispatch({type: FETCH_ARTICLES})
    return axios.put('/api/updateArticle', {article, _csrf})
    .then(res=>{
      dispatch(fetchArticlesValidate(res.data));
      dispatch(closePopup());
      setTimeout(()=>dispatch(showPopup({message: "L'article a bien été modifié.", error: false})),1000);
    })
    .catch(err=>{
      dispatch(fetchArticlesError(err));
      dispatch(closePopup())
      setTimeout(()=>dispatch(showPopup({message: "Une erreur est survenue.", error: true})),1000);
    })
  }
};