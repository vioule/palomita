import { 
  SET_ARTICLE_TITLE, 
  SET_ARTICLE_CATEGORIE,
  SET_ARTICLE_VIGNETTE,
  SET_ARTICLE_CONTENT_SELECTED,
  SET_ARTICLE_VALIDATE,
  SET_ARTICLE,
  SET_ARTICLE_PUBLISHED
} from "../../actions/actionTypes";

const DEFAULT_STATE = {
  _id: "",
  title: "",
  categorie: "",
  date: "",
  comments: [],
  selected: -1,
  vignette: '',
  validate: false,
  published: false
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_ARTICLE_TITLE:
      return Object.assign({}, state, {title: action.payload});
    case SET_ARTICLE_CATEGORIE:
      return Object.assign({}, state, {categorie: action.payload});
    case SET_ARTICLE_VIGNETTE:
      return Object.assign({}, state, {vignette: action.payload});
    case SET_ARTICLE_CONTENT_SELECTED:
      return Object.assign({}, state, {selected: action.payload});
    case SET_ARTICLE_VALIDATE:
      return Object.assign({}, state, {validate: action.payload});
    case SET_ARTICLE_PUBLISHED:
      return Object.assign({}, state, {published: action.payload});
    case SET_ARTICLE:
      return Object.assign({}, state, {title: action.payload.title, categorie: action.payload.categorie, vignette: action.payload.vignette , _id: action.payload._id, validate: false, published: action.payload.published});
    default:
      return state
  };
};