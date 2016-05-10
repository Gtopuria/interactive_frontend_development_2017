/* global describe:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import InactiveWord from '../../app/components/InactiveWord';

describe('InactiveWord', () => {
  const shallowRender = word => {
    const renderer = createRenderer();
    renderer.render(<InactiveWord word={word} />);
    return renderer.getRenderOutput();
  };

  it('should display word and space', () => {
    const inactiveWord = shallowRender('word');
    expect(inactiveWord.props.children[0]).to.eql('word');
    expect(inactiveWord.props.children[1]).to.eql(' ');
  });
});
