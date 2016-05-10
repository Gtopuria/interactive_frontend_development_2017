/* global describe:false, it:false, expect:false */
import wordsReducer from '../../app/reducers/WordsReducer';
import { SUBMIT_INPUT } from '../../app/constants/TypingActionType';
import { FETCH_WORDS_REQUEST, FETCH_WORDS_SUCCESS } from '../../app/constants/WordsActionType';
import { FETCH_WORDS_FAILURE } from '../../app/constants/WordsActionType';
import { START_GAME } from '../../app/constants/ButtonsActionType';

describe('WordsReducer', () => {
  it('should initialize state', () => {
    expect(wordsReducer(undefined, {})).to.eql({ upcoming: [], evaluated: [], fetching: false });
  });

  it('should handle FETCH_WORDS_REQUEST', () => {
    expect(wordsReducer({
      upcoming: [],
      evaluated: [],
      fetching: false
    }, {
      type: FETCH_WORDS_REQUEST
    })).to.eql({
      upcoming: [],
      evaluated: [],
      fetching: true
    });
  });

  it('should handle FETCH_WORDS_SUCCESS', () => {
    expect(wordsReducer({
      upcoming: [],
      evaluated: [],
      fetching: true
    }, {
      type: FETCH_WORDS_SUCCESS,
      payload: ['word1', 'word2', 'word3']
    })).to.eql({
      upcoming: ['word1', 'word2', 'word3'],
      evaluated: [],
      fetching: false
    });
  });

  it('should handle FETCH_WORDS_FAILURE', () => {
    expect(wordsReducer({
      upcoming: [],
      evaluated: [],
      fetching: true
    }, {
      type: FETCH_WORDS_FAILURE,
      error: 'Something went horribly wrong'
    })).to.eql({
      upcoming: [],
      evaluated: [],
      fetching: false
    });
  });

  it('should handle START_GAME', () => {
    expect(wordsReducer({
      upcoming: ['word2', 'word3'],
      evaluated: [
        { word: 'word1', correct: true }
      ],
      fetching: false
    }, {
      type: START_GAME
    })).to.eql({
      upcoming: ['word2', 'word3'],
      evaluated: [],
      fetching: false
    });
  });

  it('should handle SUBMIT_INPUT if there are upcoming words and input is correct', () => {
    expect(wordsReducer({
      upcoming: ['word2', 'word3'],
      evaluated: [
        { word: 'word1', correct: true }
      ],
      fetching: false
    }, {
      type: SUBMIT_INPUT,
      payload: 'word2'
    })).to.eql({
      upcoming: ['word3'],
      evaluated: [
        { word: 'word1', correct: true }, { word: 'word2', correct: true }
      ],
      fetching: false
    });
  });

  it('should handle SUBMIT_INPUT if there are upcoming words and input is incorrect', () => {
    expect(wordsReducer({
      upcoming: ['word2', 'word3'],
      evaluated: [
        { word: 'word1', correct: true }
      ],
      fetching: false
    }, {
      type: SUBMIT_INPUT,
      payload: 'word1'
    })).to.eql({
      upcoming: ['word3'],
      evaluated: [
        { word: 'word1', correct: true }, { word: 'word2', correct: false }
      ],
      fetching: false
    });
  });

  it('should handle SUBMIT_INPUT if there are no upcoming words', () => {
    expect(wordsReducer({
      upcoming: [],
      evaluated: [
        { word: 'word1', correct: true }
      ],
      fetching: false
    }, {
      type: SUBMIT_INPUT,
      payload: 'word1'
    })).to.eql({
      upcoming: [],
      evaluated: [
        { word: 'word1', correct: true }
      ],
      fetching: false
    });
  });
});
