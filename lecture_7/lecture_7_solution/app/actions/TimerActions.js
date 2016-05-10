import { INCREMENT_TIMER } from '../constants/TimerActionType';

export const incrementTimer = () => ({
  type: INCREMENT_TIMER
});

export const startTimer = () =>
  (dispatch, getState) => {
    const interval = setInterval(() => {
      if (getState().timer.active) {
        dispatch(incrementTimer());
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

