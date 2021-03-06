import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  const comments = props.comments.map((comment) => {
    return (
      <Comment
        author={comment.author}
        key={comment.id}
        inFlight={comment.inFlight}
      >
        {comment.text}
      </Comment>
    );
  });

  // Use different views for in-flight, succeeded and failed requests.

  if (props.fetchState.inFlight) {
    return <h3>Fetching comments...</h3>;
  } else if (props.fetchState.error) {
    return (
      <div>
        <h3>Failed to fetch comments</h3>
        <p>{props.fetchState.error}</p>
      </div>
    );
  } else {
    return (
      <div className='commentList'>
        <button onClick={props.onRequestComments}>Request comments</button>
        {comments}
      </div>
    );
  }
};
CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
      inFlight: React.PropTypes.bool
    })
  ).isRequired,
  onRequestComments: React.PropTypes.func.isRequired,
  fetchState: React.PropTypes.shape({
    inFlight: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string
  }).isRequired
};
export default CommentList;
