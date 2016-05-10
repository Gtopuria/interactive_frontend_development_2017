import { sendWebSocketMessage } from '../actions/WebSocketActions';
import { omit, isEqual } from 'lodash';

const GameStatePublisher = store => next => action => {
  const initialGameState = omit(store.getState(), ['opponent', 'webSocket']);
  const result = next(action);
  const modifiedGameState = omit(store.getState(), ['opponent', 'webSocket']);
  if (store.getState().webSocket.connected && !isEqual(initialGameState, modifiedGameState)) {
    sendWebSocketMessage(modifiedGameState);
  }
  return result;
};

export default GameStatePublisher;
