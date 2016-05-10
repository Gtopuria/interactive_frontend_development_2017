import React from 'react';
import HighscoresContainer from '../containers/HighscoresContainer';
import StatisticsContainer from '../containers/StatisticsContainer';
import WordsContainer from '../containers/WordsContainer';
import TypingContainer from '../containers/TypingContainer';
import ButtonsContainer from '../containers/ButtonsContainer';
import OpponentContainer from '../containers/OpponentContainer';

export default function Game() {
  return (
    <div>
      <h2>You</h2>
      <HighscoresContainer />
      <StatisticsContainer />
      <WordsContainer />
      <TypingContainer />
      <ButtonsContainer />
      <OpponentContainer />
    </div>
  );
}
