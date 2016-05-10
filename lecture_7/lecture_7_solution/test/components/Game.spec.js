/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Game from '../../app/components/Game';

describe('Game', () => {
  const shallowRender = () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Game />);
    return renderer.getRenderOutput();
  };

  it('should render Header with "You"', () => {
    const game = shallowRender();
    const header = game.props.children[0];
    expect(header.type).to.eql('h2');
    expect(header.props.children).to.eql('You');
  });

  it('should render HighscoresContainer', () => {
    const game = shallowRender();
    const highscoresContainer = game.props.children[1];
    expect(highscoresContainer.type.displayName).to.eql('Connect(Highscores)');
  });

  it('should render StatisticsContainer', () => {
    const game = shallowRender();
    const statsContainer = game.props.children[2];
    expect(statsContainer.type.displayName).to.eql('Connect(Statistics)');
  });

  it('should render WordsContainer', () => {
    const game = shallowRender();
    const wordsContainer = game.props.children[3];
    expect(wordsContainer.type.displayName).to.eql('Connect(Words)');
  });

  it('should render TypingContainer', () => {
    const game = shallowRender();
    const wordsContainer = game.props.children[4];
    expect(wordsContainer.type.displayName).to.eql('Connect(Typing)');
  });

  it('should render ButtonsContainer', () => {
    const game = shallowRender();
    const buttonsContainer = game.props.children[5];
    expect(buttonsContainer.type.displayName).to.eql('Connect(Buttons)');
  });

  it('should render OpponentContainer', () => {
    const game = shallowRender();
    const opponentContainer = game.props.children[6];
    expect(opponentContainer.type.displayName).to.eql('Connect(Opponent)');
  });
});
