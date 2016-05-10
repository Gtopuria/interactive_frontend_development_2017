/* global describe:false, it:false, expect:false, sinon:false */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startGame, stopGame } from '../../app/actions/ButtonsActions';
import { FETCH_WORDS_REQUEST } from '../../app/constants/WordsActionType';
import { START_GAME, STOP_GAME } from '../../app/constants/ButtonsActionType';

describe('ButtonsActions', () => {
  it('stopGame should create STOP_GAME action', () => {
    const mockState = {
      words: { evaluated: [{ word: 'word1', correct: true }, { word: 'word2', correct: false }] },
      timer: { seconds: 6 }
    };
    const mockStore = configureMockStore([thunk])(mockState);
    mockStore.dispatch(stopGame());
    const expectedActions = [
      { type: STOP_GAME, payload: { wpm: 10, accuracy: 50, duration: 6 } },
      { type: '@@router/CALL_HISTORY_METHOD', payload: { args: ['/pastGames'], method: 'push' } }
    ];
    expect(mockStore.getActions()).to.eql(expectedActions);
  });

  it('startGame should do nothing if fetching words already in progress', () => {
    const mockStore = configureMockStore([thunk])({ words: { fetching: true } });
    mockStore.dispatch(startGame());
    expect(mockStore.getActions()).to.eql([]);
  });

  it('startGame should create START_GAME action and fetch words', () => {
    const mockStore = configureMockStore([thunk])({ words: { fetching: false } });
    mockStore.dispatch(startGame());
    const expectedActions = [
      { type: START_GAME },
      { type: FETCH_WORDS_REQUEST }
    ];
    expect(mockStore.getActions()).to.eql(expectedActions);
  });
});
