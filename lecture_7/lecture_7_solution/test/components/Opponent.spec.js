/* global describe:false, it:false, expect:false, context: false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Opponent from '../../app/components/Opponent';

describe('Opponent', () => {
  const shallowRender = (display, bestWpm, bestAccuracy, wpm, accuracy,
                         secondsElapsed, previousWord, activeWord, inactiveWords, input) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Opponent display={display} bestWpm={bestWpm} bestAccuracy={bestAccuracy} wpm={wpm}
        accuracy={accuracy} secondsElapsed={secondsElapsed} previousWord={previousWord}
        activeWord={activeWord} inactiveWords={inactiveWords} input={input}
      />);
    return renderer.getRenderOutput();
  };

  context('when there is no opponent', () => {
    it('should render nothing', () => {
      const opponent = shallowRender(false, 20, 50, 10, 40, 20,
        { word: 'prevWord2', correct: false }, 'word1', ['word2', 'word3'], 'input');
      expect(opponent.props.children).to.be.undefined;
    });
  });

  context('when there is an opponent', () => {
    it('should render header with "Opponent"', () => {
      const opponent = shallowRender(true, 20, 50, 10, 40, 20,
        { word: 'prevWord2', correct: false }, 'word1', ['word2', 'word3'], 'input');
      const header = opponent.props.children[0];
      expect(header.type).to.eql('h2');
      expect(header.props.children).to.eql('Opponent');
    });

    it('should render Highscores component', () => {
      const opponent = shallowRender(true, 20, 50, 10, 40, 20,
        { word: 'prevWord2', correct: false }, 'word1', ['word2', 'word3'], 'input');
      const highscores = opponent.props.children[1];
      expect(highscores.type.name).to.eql('Highscores');
      expect(highscores.props.wpm).to.eql(20);
      expect(highscores.props.accuracy).to.eql(50);
    });

    it('should render Statistics component', () => {
      const opponent = shallowRender(true, 20, 50, 10, 40, 20,
        { word: 'prevWord2', correct: false }, 'word1', ['word2', 'word3'], 'input');
      const statistics = opponent.props.children[2];
      expect(statistics.type.name).to.eql('Statistics');
      expect(statistics.props.secondsElapsed).to.eql(20);
      expect(statistics.props.wpm).to.eql(10);
      expect(statistics.props.accuracy).to.eql(40);
    });

    it('should render Words component', () => {
      const opponent = shallowRender(true, 20, 50, 10, 40, 20,
        { word: 'prevWord2', correct: false }, 'word1', ['word2', 'word3'], 'input');
      const statistics = opponent.props.children[3];
      expect(statistics.type.name).to.eql('Words');
      expect(statistics.props.previousWord).to.eql({ word: 'prevWord2', correct: false });
      expect(statistics.props.activeWord).to.eql('word1');
      expect(statistics.props.inactiveWords).to.eql(['word2', 'word3']);
      expect(statistics.props.input).to.eql('input');
    });
  });
});
