import React, { PropTypes } from 'react';
import PreviousWord from './PreviousWord';
import ActiveWord from './ActiveWord';
import InactiveWord from './InactiveWord';

export default function Words({ previousWord, activeWord, inactiveWords, input }) {
  return (
    <div>
      { previousWord ? <PreviousWord word={previousWord} /> : null }
      { activeWord ? <ActiveWord word={activeWord} input={input} /> : null}
      {inactiveWords.map((inactiveWord, i) => <InactiveWord word={inactiveWord} key={i} />)}
    </div>
  );
}

Words.propTypes = {
  previousWord: PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }),
  activeWord: PropTypes.string,
  inactiveWords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  input: PropTypes.string.isRequired
};

