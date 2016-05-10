import { reduce } from 'lodash';

export function selectBestWpm(state) {
  return reduce(state.highscores, (highest, current) => Math.max(highest, current.wpm), 0);
}

export function selectBestAccuracy(state) {
  return reduce(state.highscores, (highest, current) => Math.max(highest, current.accuracy), 0);
}
