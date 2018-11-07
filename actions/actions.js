import { Questions } from '../constants/Questions';

export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export function updateAnswer(answer) {
  return {
    type: UPDATE_ANSWER,
    payload: answer
  };
}

export function getQuestions() {
  return {
    type: GET_QUESTIONS,
    payload: Questions
  };
}
