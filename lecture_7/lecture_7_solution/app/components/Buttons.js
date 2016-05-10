import React, { PropTypes } from 'react';

export default function Buttons({ gameStarted, onStart, onStop }) {
  return (
    <div>
      {!gameStarted ? <button onClick={onStart}>Start game</button> : null}
      {gameStarted ? <button onClick={onStop}>Stop game</button> : null}
    </div>
  );
}

Buttons.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};
