import { INIT_ANSWER, SET_ANSWER_CONTENT, SET_ANSWER_VALIDATE } from "./actionTypes";

export function initAnswer(payload) {
  return {type: INIT_ANSWER, payload}
};
export function setAnswerContent(payload) {
  return {type: SET_ANSWER_CONTENT, payload: {content: payload}}
};
export function setAnswerValidate(payload) {
  return {type: SET_ANSWER_VALIDATE, payload}
};


