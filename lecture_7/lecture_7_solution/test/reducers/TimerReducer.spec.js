/* global describe:false, it:false, expect:false */
import timerReducer from '../../app/reducers/TimerReducer';
import { INCREMENT_TIMER } from '../../app/constants/TimerActionType';
import { START_GAME, STOP_GAME } from '../../app/constants/ButtonsActionType';

describe('TimerReducer', () => {
  it('should initialize state', () => {
    expect(timerReducer(undefined, {})).to.eql({
      seconds: 0,
      active: false
    });
  });

  it('should handle INCREMENT_TIMER', () => {
    expect(timerReducer({
      seconds: 0,
      active: true
    }, {
      type: INCREMENT_TIMER
    })).to.eql({
      seconds: 1,
      active: true
    });
  });

  it('should handle START_GAME', () => {
    expect(timerReducer({
      seconds: 5,
      active: false
    }, {
      type: START_GAME
    })).to.eql({
      seconds: 0,
      active: true
    });
  });

  it('should handle STOP_GAME', () => {
    expect(timerReducer({
      seconds: 5,
      active: true
    }, {
      type: STOP_GAME
    })).to.eql({
      seconds: 5,
      active: false
    });
  });
});

