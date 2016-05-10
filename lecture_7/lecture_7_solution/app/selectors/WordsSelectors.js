import { last, first, take, tail } from 'lodash';

export function selectPrevious(state) {
  return last(state.words.evaluated);
}

export function selectActive(state) {
  return first(state.words.upcoming);
}

export function selectInactive(state) {
  return tail(take(state.words.upcoming, 5));
}
