import { 
  SET_ARTICLE
} from './actionTypes';
const axios = require('axios');

export const setArticle = (id) => { 
  return (dispatch) => {
    return axios.get('/api/getArticle', {params: {id}})
    .then(res=>{
      dispatch({type: SET_ARTICLE, payload:res.data})
    })
    .catch(err=>err)
  }
};