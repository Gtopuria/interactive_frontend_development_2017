import fetch from 'isomorphic-fetch';
import { FETCH_WORDS_REQUEST, FETCH_WORDS_SUCCESS } from '../constants/WordsActionType';
import { FETCH_WORDS_FAILURE } from '../constants/WordsActionType';

export const fetchWordsRequest = () => ({
  type: FETCH_WORDS_REQUEST
});

export const fetchWordsSuccess = (words) => ({
  type: FETCH_WORDS_SUCCESS,
  payload: words
});

export const fetchWordsFailure = (ex) => ({
  type: FETCH_WORDS_FAILURE,
  error: ex
});

export const fetchWords = () =>
  dispatch => {
    dispatch(fetchWordsRequest());
    return fetch('http://localhost:3000/words.json')
      .then(res => res.json());
  };
