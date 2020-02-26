import { 
  SET_ARTICLE
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  _id: "",
  title: "",
  categorie: "",
  date: "",
  comments: [],
  content: []
};

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_ARTICLE:
      return action.payload
    default:
      return state
  };
};