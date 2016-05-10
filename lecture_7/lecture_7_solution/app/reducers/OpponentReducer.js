import { UPDATE_OPPONENT } from '../constants/OpponentActionType';
import { WEBSOCKET_CONNECTION_DROPPED } from '../constants/WebSocketActionType';

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

const initialState = {
  active: false,
  highscores: {},
  timer: {},
  words: {
    upcoming: [],
    evaluated: []
  }
};

export default function OpponentReducer(state = initialState, action) {
  switch (action.type) {
    case WEBSOCKET_CONNECTION_DROPPED:
      return initialState;
    case UPDATE_OPPONENT:
      return merge({ active: true }, action.payload);
    default:
      return state;
  }
}
