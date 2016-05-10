import { push } from 'react-router-redux';
import { fetchWords, fetchWordsSuccess, fetchWordsFailure } from './WordsActions';
import { startTimer } from './TimerActions';
import { selectAccuracy, selectWpm } from '../selectors/StatisticsSelectors';
import { START_GAME, STOP_GAME } from '../constants/ButtonsActionType';

export const startGame = () =>
  (dispatch, getState) => {
    if (getState().words.fetching) {
      return;
    }
    dispatch({ type: START_GAME });
    dispatch(fetchWords())
      .then(json => {
        dispatch(fetchWordsSuccess(json));
        dispatch(startTimer());
      }, ex => dispatch(fetchWordsFailure(ex))
    );
  };

export const stopGame = () =>
  (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: STOP_GAME,
      payload: {
        wpm: selectWpm(state),
        accuracy: selectAccuracy(state),
        duration: state.timer.seconds
      }
    });
    dispatch(push('/pastGames'));
  };
