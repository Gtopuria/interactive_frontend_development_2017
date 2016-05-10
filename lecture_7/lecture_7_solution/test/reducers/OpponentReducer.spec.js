/* global describe:false, it:false, expect:false */
import opponentReducer from '../../app/reducers/OpponentReducer';
import { UPDATE_OPPONENT } from '../../app/constants/OpponentActionType';
import { WEBSOCKET_CONNECTION_DROPPED } from '../../app/constants/WebSocketActionType';

describe('OpponentReducer', () => {
  it('should initialize state', () => {
    expect(opponentReducer(undefined, {})).to.eql({
      active: false,
      highscores: {},
      timer: {},
      words: {
        upcoming: [],
        evaluated: []
      }
    });
  });

  it('should handle WEBSOCKET_CONNECTION_DROPPED', () => {
    expect(opponentReducer({
      active: true,
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
    }, {
      type: WEBSOCKET_CONNECTION_DROPPED
    })).to.eql({
      active: false,
      highscores: {},
      timer: {},
      words: {
        upcoming: [],
        evaluated: []
      }
    });
  });

  it('should handle UPDATE_OPPONENT', () => {
    expect(opponentReducer({
      active: false,
      highscores: {},
      timer: {},
      words: {
        upcoming: [],
        evaluated: []
      }
    }, {
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
    })).to.eql({
      active: true,
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
    });
  });
});
