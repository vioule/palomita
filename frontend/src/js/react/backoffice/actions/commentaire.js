import { FETCH_COMMENT, FETCH_COMMENT_VALIDATE, FETCH_COMMENT_ERROR } from "./actionTypes";
const axios = require('axios');

export function fetchCommentValidate(payload) {
  return {type: FETCH_COMMENT_VALIDATE, payload}
};

export function fetchCommentError(payload) {
  return {type: FETCH_COMMENT_ERROR, payload}
};

export function getConversation(id) {
  return (dispatch) => {
    dispatch({type: FETCH_COMMENT})
    return axios.get('/api/getConversation', {params: {id}})
    .then(res=>{
      dispatch(fetchCommentValidate(res.data))
    })
    .catch(err=>dispatch(fetchCommentError(err)))
  }
};