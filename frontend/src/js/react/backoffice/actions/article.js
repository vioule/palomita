import { 
  SET_ARTICLE_TITLE,
  SET_ARTICLE_CATEGORIE,
  ADD_ARTICLE_PARAGRAPH,
  ADD_ARTICLE_IMAGES,
  DELETE_ARTICLE_ITEM,
  SORT_ARTICLE_CONTENT,
  SET_ARTICLE_CONTENT,
  SET_ARTICLE_CONTENT_SELECTED,
  SET_ARTICLE_VALIDATE,
  SET_ARTICLE
} from "./actionTypes";
const arrayMove = require('array-move');
const axios = require('axios');

export function setArticleTitle(payload) {
  return {type: SET_ARTICLE_TITLE, payload}
};
export function setArticleCategorie(payload) {
  return {type: SET_ARTICLE_CATEGORIE, payload}
};
export function addArticleParagraph() {
  return {type: ADD_ARTICLE_PARAGRAPH}
};
export function deleteArticleItem(index) {
  return {type: DELETE_ARTICLE_ITEM, index}
};




export function addArticleImages(urls) {
  return {type: ADD_ARTICLE_IMAGES, urls}
};

export function uploadArticleImages(imgs, _csrf, articleID='') {
  var formData = new FormData();
  formData.append('articleID', articleID)
  for (let i = 0 ; i < imgs.length ; i++) {
    formData.append("images", imgs[i]);
  }
  return (dispatch) => {
    return axios.post('/api/uploadArticleImages', formData, {headers: {'CSRF-Token': _csrf}})
    .then(res=>{
      dispatch(addArticleImages(res.data))
    })
    .catch(err=>err)
  }
};



export function setArticleContentSelected(payload) {
  return {type: SET_ARTICLE_CONTENT_SELECTED, payload}
};
export function setArticleContent(index, payload) {
  return {type: SET_ARTICLE_CONTENT, index, payload}
};
export function setArticleValidate(payload) {
  return {type: SET_ARTICLE_VALIDATE, payload}
};
export function setArticle(payload) {
  return {type: SET_ARTICLE, payload}
};
export function sortArticleContent(array, {oldIndex, newIndex}) {
  const payload = arrayMove(array, oldIndex, newIndex)
  return {type: SORT_ARTICLE_CONTENT, payload}
};