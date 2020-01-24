import { FETCH_ARTICLES, FETCH_ARTICLES_VALIDATE, FETCH_ARTICLES_ERROR, SORT_ARTICLES } from "./actionTypes";
const axios = require('axios');

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