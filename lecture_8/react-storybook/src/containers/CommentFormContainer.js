import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {commentPostRequested} from '../actions';
import {push} from 'connected-react-router';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({author, text}) => {
    dispatch(commentPostRequested({author, text}));
    dispatch(push('/comments'));
  }
});

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(undefined, mapDispatchToProps)(CommentForm);
