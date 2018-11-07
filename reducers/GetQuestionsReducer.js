import { GET_QUESTIONS } from '../actions/actions';

export default function UpdateAnswerReducer(state = { questions: {} }, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { questions: action.payload.questions };
    // case SELECT:
    //   let character = action.payload.character;
    //   return {
    //     ...state,
    //     characters: { ...state.characters, [character.id]: character }
    //   };
    default:
      return state;
  }
}
