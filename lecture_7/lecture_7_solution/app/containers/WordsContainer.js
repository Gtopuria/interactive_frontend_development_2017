import { connect } from 'react-redux';
import { selectPrevious, selectActive, selectInactive } from '../selectors/WordsSelectors';
import Words from '../components/Words';

const mapStateToProps = (state) => ({
  previousWord: selectPrevious(state),
  activeWord: selectActive(state),
  inactiveWords: selectInactive(state),
  input: state.input
});

export default connect(mapStateToProps)(Words);
