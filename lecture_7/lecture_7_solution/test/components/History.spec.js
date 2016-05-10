/* global describe:false, context:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import History from '../../app/components/History';

describe('History', () => {
  const shallowRender = pastGames => {
    const renderer = createRenderer();
    renderer.render(<History pastGames={pastGames}/>);
    return renderer.getRenderOutput();
  };

  it('should render header and statistics for all previous games', () => {
    const history = shallowRender([
      { duration: 9, wpm: 20, accuracy: 100 },
      { duration: 12, wpm: 20, accuracy: 75 }
    ]);
    expect(history.props.children).to.have.length(2);

    const first = history.props.children[0];
    expect(first.props.children[0].type).to.eql('h3');
    expect(first.props.children[0].props.children).to.eql('Game 1');
    expect(first.props.children[1].type.name).to.eql('Statistics');
    expect(first.props.children[1].props).to.eql({ secondsElapsed: 9, wpm: 20, accuracy: 100 });

    const second = history.props.children[1];
    expect(second.props.children[0].type).to.eql('h3');
    expect(second.props.children[0].props.children).to.eql('Game 2');
    expect(second.props.children[1].type.name).to.eql('Statistics');
    expect(second.props.children[1].props).to.eql({ secondsElapsed: 12, wpm: 20, accuracy: 75 });
  });
});
