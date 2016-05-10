/* global describe:false, it:false, expect:false */
import inputReducer from '../../app/reducers/InputReducer';
import { CHANGE_INPUT, SUBMIT_INPUT } from '../../app/constants/TypingActionType';
import { START_GAME } from '../../app/constants/ButtonsActionType';

describe('InputReducer', () => {
  it('should initialize state', () => {
    expect(inputReducer(undefined, {})).to.eql('');
  });

  it('should handle CHANGE_INPUT', () => {
    expect(inputReducer('', { type: CHANGE_INPUT, payload: 'changed' })).to.eql('changed');
  });

  it('should handle SUBMIT_INPUT', () => {
    expect(inputReducer('initial', { type: SUBMIT_INPUT, payload: 'initial' })).to.eql('');
  });

  it('should handle START_GAME', () => {
    expect(inputReducer('initial', { type: START_GAME })).to.eql('');
  });
});

