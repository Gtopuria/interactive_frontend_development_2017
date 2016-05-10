/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Words from '../../app/components/Words';

describe('Words', () => {
  const shallowRender = (previousWord, activeWord, inactiveWords, input) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Words previousWord={previousWord} activeWord={activeWord} inactiveWords={inactiveWords}
        input={input}
      />);
    return renderer.getRenderOutput();
  };

  it('should render PreviousWord component if previous word exists', () => {
    const words = shallowRender({ word: 'prevWord2', correct: false },
      'word1', ['word2', 'word3'], 'input');
    const previousWord = words.props.children[0];
    expect(previousWord.type.name).to.eql('PreviousWord');
    expect(previousWord.props.word).to.eql({ word: 'prevWord2', correct: false });
  });

  it('should not render PreviousWord component if previous word does not exist', () => {
    const words = shallowRender(undefined, 'word1', ['word2', 'word3'], 'input');
    expect(words.props.children[0]).to.be.null;
  });

  it('should render ActiveWord component', () => {
    const words = shallowRender({ word: 'prevWord2', correct: false },
      'word1', ['word2', 'word3'], 'input');
    const activeWord = words.props.children[1];
    expect(activeWord.type.name).to.eql('ActiveWord');
    expect(activeWord.props.word).to.eql('word1');
    expect(activeWord.props.input).to.eql('input');
  });

  it('should render two InactiveWord components', () => {
    const words = shallowRender({ word: 'prevWord2', correct: false },
      'word1', ['word2', 'word3'], 'input');
    const inactiveWords = words.props.children[2];
    expect(inactiveWords).to.have.length(2);
    expect(inactiveWords[0].props.word).to.eql('word2');
    expect(inactiveWords[1].props.word).to.eql('word3');
  });
});
