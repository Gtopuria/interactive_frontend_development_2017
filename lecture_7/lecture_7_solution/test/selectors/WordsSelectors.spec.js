/* global describe:false, it:false, expect:false */
import { selectPrevious, selectActive, selectInactive } from '../../app/selectors/WordsSelectors';

describe('WordsSelectors', () => {
  describe('selectPrevious', () => {
    it('should select previous word', () => {
      expect(selectPrevious({
        timer: {
          seconds: 6,
          started: true
        },
        words: {
          evaluated: [
            { word: 'word1', correct: true },
            { word: 'word2', correct: false }
          ],
          upcoming: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
          fetching: false
        },
        input: ''
      })).to.eql({ word: 'word2', correct: false });
    });
  });

  describe('selectActive', () => {
    it('should select active words', () => {
      expect(selectActive({
        timer: {
          seconds: 6,
          started: true
        },
        words: {
          evaluated: [
            { word: 'word1', correct: true },
            { word: 'word2', correct: false }
          ],
          upcoming: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
          fetching: false
        },
        input: ''
      })).to.eql('hexagon');
    });
  });


  describe('selectInactive', () => {
    it('should select inactive words', () => {
      expect(selectInactive({
        timer: {
          seconds: 6,
          started: true
        },
        words: {
          evaluated: [
            { word: 'word1', correct: true },
            { word: 'word2', correct: false }
          ],
          upcoming: ['hexagon', 'development', 'inexplosive', 'fashionably', 'disturb'],
          fetching: false
        },
        input: ''
      })).to.eql(['development', 'inexplosive', 'fashionably', 'disturb']);
    });
  });
});