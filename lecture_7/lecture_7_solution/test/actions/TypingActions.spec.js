/* global describe:false, it:false, expect:false */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeInput, submitInput, onInput } from '../../app/actions/TypingActions';
import { CHANGE_INPUT, SUBMIT_INPUT } from '../../app/constants/TypingActionType';

describe('TypingActions', () => {
  it('changeInput should create CHANGE_INPUT action', () => {
    expect(changeInput('dist')).to.eql({
      type: CHANGE_INPUT,
      payload: 'dist'
    });
  });

  it('submitInput should create SUBMIT_INPUT action', () => {
    expect(submitInput('dist')).to.eql({
      type: SUBMIT_INPUT,
      payload: 'dist'
    });
  });

  it('onInput should create no action if game is not active', () => {
    const mockStore = configureMockStore([thunk])({ timer: { active: false } });
    const inputEvent = new window.KeyboardEvent('keypress', { keyCode: 97 });
    mockStore.dispatch(onInput(inputEvent));

    expect(mockStore.getActions()).to.eql([]);
  });

  it('onInput should create SUBMIT_INPUT action if game is active and space is pressed', () => {
    const mockStore = configureMockStore([thunk])({ timer: { active: true }, input: 'word' });
    const inputEvent = new window.KeyboardEvent('keypress', { keyCode: 32 });
    mockStore.dispatch(onInput(inputEvent));

    const expectedActions = [{
      type: SUBMIT_INPUT,
      payload: 'word'
    }];
    expect(mockStore.getActions()).to.eql(expectedActions);
  });

  it('onInput should create CHANGE_INPUT action if game is active and other key is pressed', () => {
    const mockStore = configureMockStore([thunk])({ timer: { active: true }, input: 'word' });
    const inputEvent = new window.KeyboardEvent('keypress', { keyCode: 97 });
    mockStore.dispatch(onInput(inputEvent));

    const expectedActions = [{
      type: CHANGE_INPUT,
      payload: 'worda'
    }];
    expect(mockStore.getActions()).to.eql(expectedActions);
  });
});
