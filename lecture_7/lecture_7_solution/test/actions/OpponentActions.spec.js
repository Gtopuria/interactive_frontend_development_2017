/* global describe:false, it:false, expect:false */
import { updateOpponent } from '../../app/actions/OpponentActions';
import { UPDATE_OPPONENT} from '../../app/constants/OpponentActionType';

describe('OpponentActions', () => {
  it('updateOpponent should create UPDATE_OPPONENT action', () => {
    expect(updateOpponent({
      highscores: {
        wpm: 20,
        accuracy: 50
      },
      timer: {
        seconds: 10
      },
      words: {
        upcoming: ['word1'],
        evaluated: [{ word: 'word2', correct: true }]
      },
      input: 'wor'
    })).to.eql({
      type: UPDATE_OPPONENT,
      payload: {
        highscores: {
          wpm: 20,
          accuracy: 50
        },
        timer: {
          seconds: 10
        },
        words: {
          upcoming: ['word1'],
          evaluated: [{ word: 'word2', correct: true }]
        },
        input: 'wor'
      }
    });
  });
});
