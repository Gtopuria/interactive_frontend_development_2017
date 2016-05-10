import { WEBSOCKET_CONNECTION_DROPPED } from '../constants/WebSocketActionType';
import { WEBSOCKET_CONNECTION_ESTABLISHED } from '../constants/WebSocketActionType';
import { updateOpponent } from '../actions/OpponentActions';

const webSocketConf = {
  port: 8081,
  host: 'localhost'
};

const webSocketConnectionEstablished = () => ({
  type: WEBSOCKET_CONNECTION_ESTABLISHED
});

const webSocketConnectionDropped = () => ({
  type: WEBSOCKET_CONNECTION_DROPPED
});

let webSocketConnection;
export const webSocketConnectionRequested = () =>
  dispatch => {
    webSocketConnection = new WebSocket(
      `ws://${webSocketConf.host}:${webSocketConf.port}/`,
      'echo-protocol'
    );

    webSocketConnection.onopen = () => {
      dispatch(webSocketConnectionEstablished());
    };

    webSocketConnection.onclose = () => {
      dispatch(webSocketConnectionDropped());
    };

    webSocketConnection.onmessage = (message) => {
      try {
        const parsedMessage = JSON.parse(message.data);
        dispatch(updateOpponent(parsedMessage));
      } catch (error) {
        console.error('error parsing websocket message', error, message.data);
      }
    };
  };

export const sendWebSocketMessage = (message) => {
  try {
    webSocketConnection.send(JSON.stringify(message));
  } catch (error) {
    console.error('Cannot stringify websocket message', error, message);
  }
};
