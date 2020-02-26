import { 
  SET_FILTER_CATEGORIE
} from "../actions/actionTypes";

const DEFAULT_STATE = {
  search: "",
  categorie: ""
};

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_FILTER_CATEGORIE:
      return Object.assign({}, state, {categorie: action.payload});
    default:
      return state
  };
};