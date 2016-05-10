/* global describe:false, it:false, expect:false, sinon:false */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Typing from '../../app/components/Typing';

describe('Typing', () => {
  const deepRender = (onInput) => TestUtils.renderIntoDocument(<Typing onInput={onInput} />);

  it('should call callback on key press', () => {
    const onInput = sinon.stub();
    deepRender(onInput, false);
    const event = new window.KeyboardEvent('keypress', { keyCode: 97 });
    window.dispatchEvent(event);
    expect(onInput).to.have.been.calledWith(event);
  });
});
