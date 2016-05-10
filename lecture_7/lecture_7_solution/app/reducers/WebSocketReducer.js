import { WEBSOCKET_CONNECTION_DROPPED } from '../constants/WebSocketActionType';
import { WEBSOCKET_CONNECTION_ESTABLISHED } from '../constants/WebSocketActionType';

export default function WebSocketReducer(state = { connected: false }, action) {
  switch (action.type) {
    case WEBSOCKET_CONNECTION_DROPPED:
      return { connected: false };
    case WEBSOCKET_CONNECTION_ESTABLISHED:
      return { connected: true };
    default:
      return state;
  }
}
