import { 
  SET_ARTICLE_TITLE,
  SET_ARTICLE_CATEGORIE,
  ADD_ARTICLE_PARAGRAPH,
  ADD_ARTICLE_IMAGE,
  DELETE_ARTICLE_ITEM,
  SORT_ARTICLE_CONTENT
} from "./actionTypes";
const arrayMove = require('array-move');

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
export function addArticleImage() {
  return {type: ADD_ARTICLE_IMAGE}
};
export function sortArticleContent(array, {oldIndex, newIndex}) {
  const payload = arrayMove(array, oldIndex, newIndex)
  return {type: SORT_ARTICLE_CONTENT, payload}
};