import { 
  FETCH_ARTICLES,
  SET_ARTICLE_TITLE,
  SET_ARTICLE_CATEGORIE,
  ADD_ARTICLE_IMAGE,
  ADD_ARTICLE_PARAGRAPH,
  DELETE_ARTICLE_ITEM,
  SORT_ARTICLE_CONTENT,
  SET_ARTICLE_CONTENT,
  SET_ARTICLE_CONTENT_SELECTED,
  SET_ARTICLE_VALIDATE,
  SET_ARTICLE_IMAGES,
  SET_ARTICLE_PUBLISHED,
  SET_ARTICLE,
  SET_ARTICLE_VIGNETTE
} from "./actionTypes";
const arrayMove = require('array-move');
const axios = require('axios');

export function setArticleTitle(payload) {
  return {type: SET_ARTICLE_TITLE, payload}
};
export function setArticlePublished(payload) {
  return {type: SET_ARTICLE_PUBLISHED, payload}
};
export function setArticleCategorie(payload) {
  return {type: SET_ARTICLE_CATEGORIE, payload}
};
export function setArticleVignette(payload) {
  return {type: SET_ARTICLE_VIGNETTE, payload}
};
export function addArticleParagraph() {
  return {type: ADD_ARTICLE_PARAGRAPH}
};
export function deleteArticleItem(index) {
  return {type: DELETE_ARTICLE_ITEM, index}
};

export function addArticleImage(img) {
  return {type: ADD_ARTICLE_IMAGE, img}
};
export function setArticleImages({ids, urls}) {
  return {type: SET_ARTICLE_IMAGES, ids, urls}
};

export function uploadArticleImages(imgs, _csrf, articleID='') {
  return async (dispatch) => {
    dispatch({type: FETCH_ARTICLES})
    var formData = new FormData();
    formData.append('articleID', articleID)
    formData.append('imagesID', JSON.stringify(imgs.map(img=>img.id)))

    const setFormData = async () => {
      return Promise.all(imgs.map(async img=> {
        let file = await fetch(img.data).then(r=>r.blob()).then(blob=>new File([blob], img.id+'.'+blob.type.split('/')[1], {type: blob.type}));
        formData.append('images', file);
        return Promise.resolve('ok');
      }))
    }
    await setFormData();

    return axios.post('/api/uploadArticleImages', formData, {headers: {'CSRF-Token': _csrf}})
    .then(res=>{
      dispatch(setArticleImages(res.data))
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