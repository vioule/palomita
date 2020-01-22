import { MENU_SHOW } from "../actions/actionTypes";

const DEFAULT_STATE = {
  open: false
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case MENU_SHOW:
      return {open: !action.payload}
    default:
      return state
  };
};