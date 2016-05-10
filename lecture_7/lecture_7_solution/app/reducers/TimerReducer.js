import { INCREMENT_TIMER } from '../constants/TimerActionType';
import { START_GAME, STOP_GAME } from '../constants/ButtonsActionType';

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

export default function TimerReducer(state = { seconds: 0, active: false }, action) {
  switch (action.type) {
    case INCREMENT_TIMER:
      return merge(state, { seconds: state.seconds + 1 });
    case START_GAME:
      return { seconds: 0, active: true };
    case STOP_GAME:
      return merge(state, { active: false });
    default:
      return state;
  }
}
