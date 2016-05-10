/* global describe:false, it:false, expect:false */
import webSocketReducer from '../../app/reducers/WebSocketReducer';
import { WEBSOCKET_CONNECTION_DROPPED, WEBSOCKET_CONNECTION_ESTABLISHED } from '../../app/constants/WebSocketActionType';

describe('WebSocketReducer', () => {
  it('should initialize state', () => {
    expect(webSocketReducer(undefined, {})).to.eql({ connected: false });
  });

  it('should handle WEBSOCKET_CONNECTION_DROPPED', () => {
    expect(webSocketReducer({
      connected: true
    }, {
      type: WEBSOCKET_CONNECTION_DROPPED
    })).to.eql({ connected: false });
  });

  it('should handle WEBSOCKET_CONNECTION_ESTABLISHED', () => {
    expect(webSocketReducer({
      connected: false
    }, {
      type: WEBSOCKET_CONNECTION_ESTABLISHED
    })).to.eql({ connected: true });
  });

});