/* global describe:false, it:false, expect:false, sinon:false, beforeEach:false, before:false,
   after:false. afterEach:false */
import { WebSocket, Server } from 'mock-socket';
import { webSocketConnectionRequested, sendWebSocketMessage } from '../../app/actions/WebSocketActions';
import { WEBSOCKET_CONNECTION_DROPPED, WEBSOCKET_CONNECTION_ESTABLISHED } from '../../app/constants/WebSocketActionType';
import { UPDATE_OPPONENT } from '../../app/constants/OpponentActionType';

describe('Websocket actions', () => {
  const actualWebSocket = window.WebSocket;
  let clock;
  let dispatch;
  let getState;
  let mockServer;

  before(() => {
    global.WebSocket = WebSocket;
    clock = sinon.useFakeTimers();
  });

  after(() => {
    global.WebSocket = actualWebSocket;
    clock.restore();
  });

  beforeEach(() => {
    dispatch = sinon.stub();
    getState = sinon.stub();
    mockServer = new Server('ws://localhost:8081');
  });

  afterEach(() => {
    mockServer.close();
  });

  describe('webSocketConnectionRequested', () => {
    it('dispatches established action when connected to server', () => {
      webSocketConnectionRequested()(dispatch, getState);
      clock.tick(100);

      expect(dispatch).to.have.been.calledWith({
        type: WEBSOCKET_CONNECTION_ESTABLISHED
      });
    });

    it('dispatches dropped action when disconnected from server', () => {
      webSocketConnectionRequested()(dispatch, getState);
      mockServer.close();
      expect(dispatch).to.have.been.calledWith({
        type: WEBSOCKET_CONNECTION_DROPPED
      });
    });
  });

  describe('sendWebSocketMessage', () => {
    it('sends stringified message to server', () => {
      webSocketConnectionRequested()(dispatch, getState);
      const onMessage = sinon.stub();
      mockServer.on('message', onMessage);
      sendWebSocketMessage({ a: 1 });

      expect(onMessage).to.have.been.calledWith('{"a":1}');
    });
  });

  describe('receiving websocket messages', () => {
    beforeEach(() => webSocketConnectionRequested()(dispatch, getState));

    it('interprets incoming message as opponent state', () => {
      mockServer.send('{"highscores":{"wpm":20,"accuracy":50},"timer":{"seconds":10},' +
        '"words":{"upcoming":["word1"],"evaluated":[{"word":"word2","correct":true}]},' +
        '"input":"wor"}');
      expect(dispatch).to.have.been.calledWith({
        type: UPDATE_OPPONENT,
        payload: {
          highscores: {
            wpm: 20,
            accuracy: 50
          },
          timer: {
            seconds: 10
          },
          words: {
            upcoming: ['word1'],
            evaluated: [{ word: 'word2', correct: true }]
          },
          input: 'wor'
        }
      });
    });

    it('ignores unparseable messages', () => {
      mockServer.send('[}');
      expect(dispatch).to.not.have.been.called;
    });
  });
});
