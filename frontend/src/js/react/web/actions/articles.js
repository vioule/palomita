import { 
  SET_ARTICLES_CONTENT
} from './actionTypes';
const axios = require('axios');

export const setArticlesContent = () => { 
  return (dispatch) => {
    return axios.get('/api/getPublishedArticlesByDate')
    .then(res=>{
      dispatch({type: SET_ARTICLES_CONTENT, payload:res.data})
    })
    .catch(err=>err)
  }
};