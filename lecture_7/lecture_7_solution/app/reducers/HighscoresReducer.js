import { STOP_GAME } from '../constants/ButtonsActionType';

export default function HighscoresReducer(state = [], action) {
  switch (action.type) {
    case STOP_GAME:
      return state.concat(action.payload);
    default:
      return state;
  }
}
