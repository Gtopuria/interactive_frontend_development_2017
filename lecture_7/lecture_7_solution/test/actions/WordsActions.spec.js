/* global describe:false, it:false, expect:false, sinon:false */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchWords, fetchWordsFailure, fetchWordsRequest, fetchWordsSuccess } from '../../app/actions/WordsActions';
import { FETCH_WORDS_FAILURE, FETCH_WORDS_REQUEST, FETCH_WORDS_SUCCESS } from '../../app/constants/WordsActionType';

describe('WordsActions', () => {
  it('fetchWordsRequest should create FETCH_WORDS_REQUEST action', () => {
    expect(fetchWordsRequest()).to.eql({
      type: FETCH_WORDS_REQUEST
    });
  });

  it('fetchWordsSuccess should create FETCH_WORDS_SUCCESS action', () => {
    expect(fetchWordsSuccess(['word1', 'word2'])).to.eql({
      type: FETCH_WORDS_SUCCESS,
      payload: ['word1', 'word2']
    });
  });

  it('fetchWordsFailure should create FETCH_WORDS_FAILURE action', () => {
    expect(fetchWordsFailure('error')).to.eql({
      type: FETCH_WORDS_FAILURE,
      error: 'error'
    });
  });

  it('fetchWords should create FETCH_WORDS_REQUEST action and return promise with words', () => {
    const mockStore = configureMockStore([thunk])({ words: { upcoming: [] } });
    nock('http://localhost:3000').get('/words.json').reply(200, ['word1', 'word2']);
    const expectedActions = [
      { type: FETCH_WORDS_REQUEST }
    ];
    mockStore.dispatch(fetchWords()).then((words) => {
      expect(mockStore.getActions().to.eql(expectedActions));
      expect(words).to.eql(['word1', 'word2']);
    });
    nock.cleanAll();
  });
});
