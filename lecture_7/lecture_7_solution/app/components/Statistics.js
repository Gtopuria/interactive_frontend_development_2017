import React, { PropTypes } from 'react';

export default function Statistics({ wpm, accuracy, secondsElapsed }) {
  return (
    <div>
      <div>{`Seconds elapsed: ${secondsElapsed}`}</div>
      <div>{`Words per minute: ${wpm}`}</div>
      <div>{`Accuracy: ${accuracy}%`}</div>
    </div>
  );
}

Statistics.propTypes = {
  secondsElapsed: PropTypes.number.isRequired,
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired
};
