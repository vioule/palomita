import { 
  ADD_ARTICLE_PARAGRAPH,
  ADD_ARTICLE_IMAGES,
  DELETE_ARTICLE_ITEM,
  SORT_ARTICLE_CONTENT,
  SET_ARTICLE_CONTENT,
  SET_ARTICLE
} from "../../actions/actionTypes";
const uuidv4 = require('uuid/v4');

function createContent(type, data, id=uuidv4()) {
  return {
    type,
    id,
    data
  }
};

const DEFAULT_STATE = [createContent("paragraph", "")];

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_ARTICLE_PARAGRAPH:
      return state.concat(createContent("paragraph", ""));
    case ADD_ARTICLE_IMAGES:
      let images = action.urls.map(url=>{
        let id = url.split('/');
        id = id[id.length-1].split('.')[0];
        return createContent("image", url, id);
      })
      return state.concat(images);
    case DELETE_ARTICLE_ITEM:
      var newState = [...state];
      newState.splice(action.index, 1)
      return newState;
    case SORT_ARTICLE_CONTENT:
      return action.payload
    case SET_ARTICLE:
      return action.payload.content
    case SET_ARTICLE_CONTENT:
      var newState = [...state];
      newState[action.index].data = action.payload;
      return newState
    default:
      return state
  };
};