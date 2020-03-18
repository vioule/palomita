import { 
  ADD_ARTICLE_PARAGRAPH,
  ADD_ARTICLE_IMAGE,
  DELETE_ARTICLE_ITEM,
  SORT_ARTICLE_CONTENT,
  SET_ARTICLE_CONTENT,
  SET_ARTICLE_IMAGES,
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
    case ADD_ARTICLE_IMAGE:
      return state.concat(createContent("image", window.URL.createObjectURL(action.img)));

    case SET_ARTICLE_IMAGES:
      return state.map(el=>{
        let index = action.ids.indexOf(el.id);
        if (index != -1) {
          window.URL.revokeObjectURL(el.data)
          el.data = action.urls[index]
        }
        return el
      })

    case DELETE_ARTICLE_ITEM:
      var newState = [...state];
      window.URL.revokeObjectURL(newState[action.index].data);
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