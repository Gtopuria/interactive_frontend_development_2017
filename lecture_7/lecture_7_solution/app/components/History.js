import React, { PropTypes } from 'react';
import Statistics from './Statistics';

export default function History({ pastGames }) {
  const gameStatistics = pastGames.map(({ wpm, accuracy, duration }, i) => (
    <div key={i}>
      <h3>{`Game ${i + 1}`}</h3>
      <Statistics secondsElapsed={duration} wpm={wpm} accuracy={accuracy} />
    </div>
  ));
  return (
    <div>{gameStatistics}</div>
  );
}

History.propTypes = {
  pastGames: PropTypes.arrayOf(React.PropTypes.shape({
    duration: PropTypes.number.isRequired,
    wpm: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired
  }))
};
