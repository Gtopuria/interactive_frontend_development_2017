import React, { PropTypes } from 'react';
import ActiveWordLetter from './ActiveWordLetter';

export default function ActiveWord({ word, input }) {
  const letters = word.split('').map((lettr, idx) => ({
    letter: lettr, correct: input[idx] ? input[idx] === lettr : null
  }));

  return (
    <span>{letters.map((letter, i) => <ActiveWordLetter letter={letter} key={i} />)} </span>
  );
}

ActiveWord.propTypes = {
  word: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired
};
