/* global describe:false, context:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import ActiveWordLetter from '../../app/components/ActiveWordLetter';

describe('ActiveWordLetter', () => {
  const shallowRender = letter => {
    const renderer = createRenderer();
    renderer.render(<ActiveWordLetter letter={letter} />);
    return renderer.getRenderOutput();
  };

  context('with unvalidated letter', () => {
    it('should display letter without background color', () => {
      const activeWordLetter = shallowRender({ letter: 'a', correct: null });
      expect(activeWordLetter.props.children).to.eql('a');
      expect(activeWordLetter.props.style).to.have.property('fontWeight').which.eql('bold');
      expect(activeWordLetter.props.style).to.have.property('textDecoration').which.eql('underline');
      expect(activeWordLetter.props.style).to.not.have.property('backgroundColor');
    });
  });

  context('with valid letter', () => {
    it('should display letter with "#ADFF2F" background color', () => {
      const activeWordLetter = shallowRender({ letter: 'a', correct: true });
      expect(activeWordLetter.props.children).to.eql('a');
      expect(activeWordLetter.props.style).to.have.property('fontWeight').which.eql('bold');
      expect(activeWordLetter.props.style).to.have.property('textDecoration').which.eql('underline');
      expect(activeWordLetter.props.style).to.have.property('backgroundColor').which.eql('#ADFF2F');
    });
  });

  context('with invalid letter', () => {
    it('should display letter with "#FF4500"" background color', () => {
      const activeWordLetter = shallowRender({ letter: 'a', correct: false });
      expect(activeWordLetter.props.children).to.eql('a');
      expect(activeWordLetter.props.style).to.have.property('fontWeight').which.eql('bold');
      expect(activeWordLetter.props.style).to.have.property('textDecoration').which.eql('underline');
      expect(activeWordLetter.props.style).to.have.property('backgroundColor').which.eql('#FF4500');
    });
  });
});
