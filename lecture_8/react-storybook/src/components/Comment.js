import React from 'react';

const Comment = (props) => {
  const statusText = props.inFlight ? 'Comment being submitted...' : '';
  return (
    <div className="comment">
      {statusText}
      <h3 className="comment-author">
        {props.author} said:
      </h3>
      {props.children}
    </div>
  );
};

Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  inFlight: React.PropTypes.bool
};

export default Comment;
