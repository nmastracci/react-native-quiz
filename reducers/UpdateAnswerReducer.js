import { UPDATE_ANSWER } from '../actions/actions';

export default function UpdateAnswerReducer(state = { answer: {} }, action) {
  switch (action.type) {
    case UPDATE_ANSWER:
      return { answer: action.payload.teamName };
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
