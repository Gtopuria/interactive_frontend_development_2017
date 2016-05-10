import { connect } from 'react-redux';
import { startGame, stopGame } from '../actions/ButtonsActions';
import Buttons from '../components/Buttons';

const mapStateToProps = (state) => ({
  gameStarted: state.timer.active
});

const mapDispatchToProps = (dispatch) => ({
  onStart: () => dispatch(startGame()),
  onStop: () => dispatch(stopGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
