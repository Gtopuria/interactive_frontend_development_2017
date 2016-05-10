import { connect } from 'react-redux';
import Opponent from '../components/Opponent';
import { selectBestAccuracy, selectBestWpm } from '../selectors/HighscoresSelectors';
import { selectWpm, selectAccuracy } from '../selectors/StatisticsSelectors';
import { selectPrevious, selectActive, selectInactive } from '../selectors/WordsSelectors';

const mapStateToProps = (state) => ({
  display: state.opponent.active,
  bestWpm: selectBestWpm(state.opponent),
  bestAccuracy: selectBestAccuracy(state.opponent),
  wpm: selectWpm(state.opponent),
  accuracy: selectAccuracy(state.opponent),
  secondsElapsed: state.opponent.timer.seconds,
  previousWord: selectPrevious(state.opponent),
  activeWord: selectActive(state.opponent),
  inactiveWords: selectInactive(state.opponent),
  input: state.opponent.input
});

export default connect(mapStateToProps)(Opponent);
