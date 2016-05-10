import React, { PropTypes } from 'react';

export default function PreviousWord({ word }) {
  const styles = !word.correct ? { textDecoration: 'line-through' } : {};
  return (
    <span style={styles}>{word.word} </span>
  );
}

PreviousWord.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }).isRequired
};
