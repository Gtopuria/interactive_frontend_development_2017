/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Buttons from '../../app/components/Buttons';

describe('Buttons', () => {
  const Wrapper = React.createClass({
    render() {
      return (<div>{this.props.children}</div>);
    }
  });

  const deepRender = (gameStarted, onStart, onStop) => TestUtils.renderIntoDocument(
    <Wrapper>
      <Buttons gameStarted={gameStarted} onStart={onStart} onStop={onStop} />
    </Wrapper>);

  it('should display only start button if game is stopped', () => {
    const onStart = sinon.stub();
    const onStop = sinon.stub();
    const buttons = deepRender(false, onStart, onStop);
    const startButton = TestUtils.findRenderedDOMComponentWithTag(buttons, 'button');
    expect(startButton.props.children).to.eql('Start game');
  });

  it('should display only stop button if game is started', () => {
    const onStart = sinon.stub();
    const onStop = sinon.stub();
    const buttons = deepRender(true, onStart, onStop);
    const stopButton = TestUtils.findRenderedDOMComponentWithTag(buttons, 'button');
    expect(stopButton.props.children).to.eql('Stop game');
  });

  it('should call onStart when pressing start button', () => {
    const onStart = sinon.stub();
    const onStop = sinon.stub();
    const buttons = deepRender(false, onStart, onStop);
    const startButton = TestUtils.findRenderedDOMComponentWithTag(buttons, 'button');
    TestUtils.Simulate.click(startButton);
    expect(onStart).to.have.been.calledOnce;
  });

  it('should call onStop when pressing stop button', () => {
    const onStart = sinon.stub();
    const onStop = sinon.stub();
    const buttons = deepRender(true, onStart, onStop);
    const stopButton = TestUtils.findRenderedDOMComponentWithTag(buttons, 'button');
    TestUtils.Simulate.click(stopButton);
    expect(onStop).to.have.been.calledOnce;
  });
});
