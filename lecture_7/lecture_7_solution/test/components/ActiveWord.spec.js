/* global describe:false, it:false, expect:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ActiveWord from '../../app/components/ActiveWord';

describe('ActiveWord', () => {
  const shallowRender = (word, input) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<ActiveWord word={word} input={input} />);
    return renderer.getRenderOutput();
  };

  it('should render ActiveLetter components and a space', () => {
    const activeWord = shallowRender('ABC', 'AC');
    expect(activeWord.props.children[1]).to.eql(' ');
    const letters = activeWord.props.children[0];
    expect(letters).to.have.length(3);
    expect(letters[0].props.letter).to.eql({ letter: 'A', correct: true });
    expect(letters[1].props.letter).to.eql({ letter: 'B', correct: false });
    expect(letters[2].props.letter).to.eql({ letter: 'C', correct: null });
  });
});
