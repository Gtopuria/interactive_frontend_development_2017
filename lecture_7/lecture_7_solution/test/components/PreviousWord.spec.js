/* global describe:false, context:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import PreviousWord from '../../app/components/PreviousWord';

describe('PreviousWord', () => {
  const shallowRender = word => {
    const renderer = createRenderer();
    renderer.render(<PreviousWord word={word} />);
    return renderer.getRenderOutput();
  };

  context('with valid previous word', () => {
    it('should display regular word and space', () => {
      const previousWord = shallowRender({ word: 'word', correct: true });
      expect(previousWord.props.children[0]).to.eql('word');
      expect(previousWord.props.children[1]).to.eql(' ');
      expect(previousWord.props.style).to.not.have.property('textDecoration');
    });
  });

  context('with invalid previous word', () => {
    it('should display striked word and space', () => {
      const previousWord = shallowRender({ word: 'word', correct: false });
      expect(previousWord.props.children[0]).to.eql('word');
      expect(previousWord.props.children[1]).to.eql(' ');
      expect(previousWord.props.style).to.have.property('textDecoration').which.eql('line-through');
    });
  });
});
