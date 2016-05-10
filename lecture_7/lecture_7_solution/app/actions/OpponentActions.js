import { UPDATE_OPPONENT } from '../constants/OpponentActionType';

export const updateOpponent = (opponentState) => ({
  type: UPDATE_OPPONENT,
  payload: opponentState
});
