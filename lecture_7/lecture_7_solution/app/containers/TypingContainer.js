import { connect } from 'react-redux';
import { onInput } from '../actions/TypingActions';
import Typing from '../components/Typing';

const mapDispatchToProps = (dispatch) => ({
  onInput: (event) => dispatch(onInput(event))
});

export default connect(() => ({}), mapDispatchToProps)(Typing);
