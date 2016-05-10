/* global describe:false, context:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Navigation from '../../app/components/Navigation';

describe('Navigation', () => {
  const shallowRender = () => {
    const renderer = createRenderer();
    renderer.render(<Navigation />);
    return renderer.getRenderOutput();
  };

  it('should render header', () => {
    const navigation = shallowRender();
    const header = navigation.props.children[0];
    expect(header.type).to.eql('h1');
    expect(header.props.children).to.eql('Speed Typer');
  });

  it('should render link to playing game', () => {
    const navigation = shallowRender();
    const link = navigation.props.children[1].props.children;
    expect(link.props.to).to.eql('/play');
    expect(link.props.children).to.eql('Play a game');
  });

  it('should render link to viewing history of games', () => {
    const navigation = shallowRender();
    const link = navigation.props.children[2].props.children;
    expect(link.props.to).to.eql('/pastGames');
    expect(link.props.children).to.eql('View history of games');
  });

  it('should render link to viewing information', () => {
    const navigation = shallowRender();
    const link = navigation.props.children[3].props.children;
    expect(link.props.to).to.eql('/about');
    expect(link.props.children).to.eql('About');
  });
});
