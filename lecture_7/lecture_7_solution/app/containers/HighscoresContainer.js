import { connect } from 'react-redux';
import { selectBestAccuracy, selectBestWpm } from '../selectors/HighscoresSelectors';
import Highscores from '../components/Highscores';

const mapStateToProps = (state) => ({
  wpm: selectBestWpm(state),
  accuracy: selectBestAccuracy(state)
});

export default connect(mapStateToProps)(Highscores);
