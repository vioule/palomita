import { SET_SEARCH_CONTENT, SET_SEARCH_TYPE, SET_SEARCH_FILTERS } from "./actionTypes";

export function setSearchContent(payload) {
  return { type: SET_SEARCH_CONTENT, payload }
};
export function setSearchType(payload) {
  return { type: SET_SEARCH_TYPE, payload }
};
export function setSearchFilters(payload) {
  return { type: SET_SEARCH_FILTERS, payload }
};