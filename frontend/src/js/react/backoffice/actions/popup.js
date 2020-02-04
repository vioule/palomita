import { SHOW_POPUP, CLOSE_POPUP } from "./actionTypes";

export function showPopup(payload) {
  return { type: SHOW_POPUP, payload };
};
export function closePopup() {
  return { type: CLOSE_POPUP };
};