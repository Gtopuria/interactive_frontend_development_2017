import React, { PropTypes } from 'react';

export default function ActiveWordLetter({ letter }) {
  const styles = { fontWeight: 'bold', textDecoration: 'underline' };
  if (letter.correct) {
    styles.backgroundColor = '#ADFF2F';
  } else if (letter.correct === false) {
    styles.backgroundColor = '#FF4500';
  }
  return (
    <span style={styles}>
      {letter.letter}
    </span>
  );
}

ActiveWordLetter.propTypes = {
  letter: PropTypes.shape({
    letter: PropTypes.string.isRequired,
    correct: PropTypes.bool
  }).isRequired
};
