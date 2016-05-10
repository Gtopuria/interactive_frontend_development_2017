/* global describe:false, it:false, expect:false */
import highscoresReducer from '../../app/reducers/HighscoresReducer';
import { STOP_GAME } from '../../app/constants/ButtonsActionType';

describe('HighscoresReducer', () => {
  it('should initialize state', () => {
    expect(highscoresReducer(undefined, {})).to.eql([]);
  });

  it('should handle STOP_GAME', () => {
    expect(highscoresReducer([], {
      type: STOP_GAME,
      payload: { wpm: 20, accuracy: 50, duration: 6 }
    })).to.eql([{ wpm: 20, accuracy: 50, duration: 6 }]);
  });
});
