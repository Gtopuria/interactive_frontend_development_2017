import React, { PropTypes } from 'react';
import Highscores from './Highscores';
import Statistics from './Statistics';
import Words from './Words';

export default function Opponent({ display, bestWpm, bestAccuracy, wpm, accuracy,
  secondsElapsed, previousWord, activeWord, inactiveWords, input }) {
  return display ? (
    <div>
      <h2>Opponent</h2>
      <Highscores wpm={bestWpm} accuracy={bestAccuracy} />
      <Statistics wpm={wpm} accuracy={accuracy} secondsElapsed={secondsElapsed} />
      <Words previousWord={previousWord} activeWord={activeWord}
        inactiveWords={inactiveWords} input={input}
      />
    </div>
  ) : (<div></div>);
}

Opponent.propTypes = {
  display: PropTypes.bool.isRequired,
  bestWpm: PropTypes.number,
  bestAccuracy: PropTypes.number,
  secondsElapsed: PropTypes.number,
  wpm: PropTypes.number,
  accuracy: PropTypes.number,
  previousWord: PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }),
  activeWord: PropTypes.string,
  inactiveWords: PropTypes.arrayOf(PropTypes.string.isRequired),
  input: PropTypes.string
};
