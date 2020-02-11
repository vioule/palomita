import { 
  ADD_ARTICLE_PARAGRAPH,
  ADD_ARTICLE_IMAGE,
  DELETE_ARTICLE_ITEM,
  SORT_ARTICLE_CONTENT
} from "../../actions/actionTypes";
const uuidv4 = require('uuid/v4');

function createContent(type) {
  return {
    type,
    id: uuidv4(),
    data: ""
  }
};

const DEFAULT_STATE = [
  createContent("paragraph")
];

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_ARTICLE_PARAGRAPH:
      return state.concat(createContent("paragraph"));
    case ADD_ARTICLE_IMAGE:
      return state.concat(createContent("image"));
    case DELETE_ARTICLE_ITEM:
      let newState = [...state];
      newState.splice(action.index, 1)
      return newState;
    case SORT_ARTICLE_CONTENT:
      return action.payload
    default:
      return state
  };
};