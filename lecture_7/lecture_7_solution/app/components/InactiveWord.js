import React, { PropTypes } from 'react';

export default function InactiveWord({ word }) {
  return (
    <span>{word} </span>
  );
}

InactiveWord.propTypes = {
  word: PropTypes.string.isRequired
};
