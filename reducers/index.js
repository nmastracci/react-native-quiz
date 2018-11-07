import { combineReducers } from 'redux';
import UpdateAnswerReducer from './UpdateAnswerReducer';

export default combineReducers({
  answers: UpdateAnswerReducer
});
