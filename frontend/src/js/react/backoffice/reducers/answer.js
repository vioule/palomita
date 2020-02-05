import { 
  INIT_ANSWER, 
  SET_ANSWER_CONTENT, 
  SET_ANSWER_VALIDATE
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  error: "",
  validate: false,
  data: {
    author: {
      name: "",
      role: ""
    },
    date: "",
    content: "",
    parent: "",
    reponse: [],
    type: "reponse"
  }
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case INIT_ANSWER:
      return Object.assign({}, DEFAULT_STATE, {data: Object.assign({}, DEFAULT_STATE.data, action.payload)});
    case SET_ANSWER_CONTENT:
      return Object.assign({}, state, {data: Object.assign({}, state.data, action.payload)});
    case SET_ANSWER_VALIDATE:
      return Object.assign({}, state, {validate: action.payload});
    default:
      return state
  };
};