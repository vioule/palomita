import { 
  SET_COMMENTS
} from './actionTypes';
const axios = require('axios');

export const setComments = (id) => { 
  return (dispatch) => {
    return axios.get('/api/getCommentsByArticle', {params: {id}})
    .then(res=>{
      dispatch({type: SET_COMMENTS, payload:res.data})
    })
    .catch(err=>err)
  }
};