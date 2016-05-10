import { CHANGE_INPUT, SUBMIT_INPUT } from '../constants/TypingActionType';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  payload: input
});

export const submitInput = (input) => ({
  type: SUBMIT_INPUT,
  payload: input
});

export const onInput = (event) =>
  (dispatch, getState) => {
    const state = getState();
    if (!state.timer.active) {
      return;
    }
    if (event.keyCode === 32) {
      dispatch(submitInput(state.input));
    } else {
      dispatch(changeInput(state.input.concat(String.fromCharCode(event.keyCode))));
    }
  };

