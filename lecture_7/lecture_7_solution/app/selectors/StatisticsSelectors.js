const selectCorrect = (state) => state.words.evaluated.filter(word => word.correct);

export function selectAccuracy(state) {
  return Math.round(selectCorrect(state).length / state.words.evaluated.length * 10000) / 100 || 0;
}

export function selectWpm(state) {
  const elapsedMinutes = state.timer.seconds / 60;
  return Math.round(selectCorrect(state).length / elapsedMinutes * 100) / 100 || 0;
}
