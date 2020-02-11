import { 
  SET_ARTICLE_TITLE, 
  SET_ARTICLE_CATEGORIE
} from "../../actions/actionTypes";

const DEFAULT_STATE = {
  title: "",
  categorie: "",
  date: "",
  comments: []
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_ARTICLE_TITLE:
      return Object.assign({}, state, {title: action.payload});æ
    case SET_ARTICLE_CATEGORIE:
      return Object.assign({}, state, {categorie: action.payload});
    default:
      return state
  };
};