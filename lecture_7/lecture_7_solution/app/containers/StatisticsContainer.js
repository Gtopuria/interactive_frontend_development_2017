import { connect } from 'react-redux';
import Statistics from '../components/Statistics';
import { selectAccuracy, selectWpm } from '../selectors/StatisticsSelectors';

const mapStateToProps = (state) => ({
  secondsElapsed: state.timer.seconds,
  wpm: selectWpm(state),
  accuracy: selectAccuracy(state)
});

export default connect(mapStateToProps)(Statistics);
