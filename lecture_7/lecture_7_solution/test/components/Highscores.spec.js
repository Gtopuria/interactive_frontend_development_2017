/* global describe:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Highscores from '../../app/components/Highscores';

describe('Highscores', () => {
  const shallowRender = (wpm, accuracy) => {
    const renderer = createRenderer();
    renderer.render(<Highscores wpm={wpm} accuracy={accuracy} />);
    return renderer.getRenderOutput();
  };

  it('should correctly display words per minute', () => {
    const statistic = shallowRender(20, 50);
    expect(statistic.props.children[0].props.children).to.eql('Best words per minute: 20');
  });

  it('should correctly display accuracy', () => {
    const statistic = shallowRender(20, 50);
    expect(statistic.props.children[1].props.children).to.eql('Best accuracy: 50%');
  });
});
