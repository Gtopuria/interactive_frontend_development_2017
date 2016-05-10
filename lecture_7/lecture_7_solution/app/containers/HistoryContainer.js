import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = (state) => ({
  pastGames: state.highscores
});

export default connect(mapStateToProps)(History);
