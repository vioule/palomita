import { FETCH_COMMENTS, FETCH_COMMENTS_VALIDATE, FETCH_COMMENTS_ERROR, SORT_COMMENTS, SHOWALL_COMMENTS } from "./actionTypes";
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