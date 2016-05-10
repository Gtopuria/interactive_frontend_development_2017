import React, { PropTypes } from 'react';

export default function Highscores({ wpm, accuracy }) {
  return (
    <div>
      <div>{`Best words per minute: ${wpm}`}</div>
      <div>{`Best accuracy: ${accuracy}%`}</div>
    </div>
  );
}

Highscores.propTypes = {
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired
};
