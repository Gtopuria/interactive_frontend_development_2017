import { first, tail } from 'lodash';
import { SUBMIT_INPUT } from '../constants/TypingActionType';
import { FETCH_WORDS_REQUEST, FETCH_WORDS_SUCCESS } from '../constants/WordsActionType';
import { FETCH_WORDS_FAILURE } from '../constants/WordsActionType';
import { START_GAME } from '../constants/ButtonsActionType';

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

const initialState = {
  upcoming: [],
  evaluated: [],
  fetching: false
};

export default function WordsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORDS_REQUEST:
      return merge(state, { fetching: true });
    case FETCH_WORDS_SUCCESS:
      return merge(state, { upcoming: action.payload, fetching: false });
    case FETCH_WORDS_FAILURE:
      console.log(action.error);
      return merge(state, { fetching: false });
    case START_GAME:
      return merge(state, { evaluated: [] });
    case SUBMIT_INPUT: {
      const activeWord = first(state.upcoming);
      if (!activeWord) {
        return state;
      }
      const evaluated = state.evaluated.concat({
        word: activeWord,
        correct: activeWord === action.payload
      });
      const upcoming = tail(state.upcoming);
      return merge(state, { upcoming, evaluated });
    }
    default:
      return state;
  }
}
