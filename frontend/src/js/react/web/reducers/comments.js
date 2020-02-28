import { 
  SET_COMMENTS
} from "../actions/actionTypes";

const DEFAULT_STATE = [];

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_COMMENTS:
      return action.payload;
    default:
      return state
  };
};