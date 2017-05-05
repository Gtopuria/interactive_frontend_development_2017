import React from 'react';
import Comment from '../components/Comment';
import {connect} from 'react-redux';

const CommentOrNotFound = ({comment, commentId}) => {
  if (comment) {
    return <Comment author={comment.author} inFlight={comment.inFlight}>{comment.text}</Comment>;
  } else {
    return <p>Comment {commentId} not found</p>;
  }
};
CommentOrNotFound.propTypes = {
  comment: React.PropTypes.object,
  commentId: React.PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.match.params.commentId;
  const comment = state.comments.comments.find((comment) => comment.id === commentId);
  return {comment, commentId: commentId};
};

export default connect(mapStateToProps)(CommentOrNotFound);
