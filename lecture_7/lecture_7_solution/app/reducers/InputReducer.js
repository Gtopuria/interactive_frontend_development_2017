import { CHANGE_INPUT, SUBMIT_INPUT } from '../constants/TypingActionType';
import { START_GAME } from '../constants/ButtonsActionType';

export default function InputReducer(state = '', action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.payload;
    case SUBMIT_INPUT:
      return '';
    case START_GAME:
      return '';
    default:
      return state;
  }
}
