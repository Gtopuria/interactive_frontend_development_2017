/* global describe:false, context:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Information from '../../app/components/Information';

describe('Information', () => {
  const shallowRender = () => {
    const renderer = createRenderer();
    renderer.render(<Information />);
    return renderer.getRenderOutput();
  };

  it('should render Author', () => {
    const information = shallowRender();
    expect(information.props.children[0].props.children).to.eql('Author: Priit Danelson');
  });

  it('should render Instructions', () => {
    const information = shallowRender();
    expect(information.props.children[1].props.children).to.eql('Instructions: To begin, click ' +
      "'Start game' and start typing (Submit with space). To finish a game and review the results" +
      " click 'Stop game'. If another player joins, his/her statistics will be shown as well.");
  });
});