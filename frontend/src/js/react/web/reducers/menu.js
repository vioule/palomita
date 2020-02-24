import { 
  SET_MENU_OPEN
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  open: false
};

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_MENU_OPEN:
      return Object.assign({}, state, {open: action.payload});
    default:
      return state
  };
};