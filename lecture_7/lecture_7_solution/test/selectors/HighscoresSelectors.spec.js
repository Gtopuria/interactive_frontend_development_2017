/* global describe:false, it:false, expect:false */
import { selectBestAccuracy, selectBestWpm } from '../../app/selectors/HighscoresSelectors';

describe('HighscoresSelectors', () => {
  describe('selectBestAccuracy', () => {
    it('should select highest accuracy', () => {
      expect(selectBestAccuracy({
        highscores: [
          { wpm: 20, accuracy: 50, duration: 6 },
          { wpm: 25, accuracy: 45, duration: 4 }
        ]
      })).to.eql(50);
    });
  });

  describe('selectBestWpm', () => {
    it('should select highest wpm', () => {
      expect(selectBestWpm({
        highscores: [
          { wpm: 20, accuracy: 50, duration: 6 },
          { wpm: 25, accuracy: 45, duration: 4 }
        ]
      })).to.eql(25);
    });
  });
});
