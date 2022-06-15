export const SingleComment = (props) => {
  return (
    <div className="single-comment">
      <span className="user-info">
        <span className="material-symbols-outlined">person_filled</span>
        <p className="comment-username">{props.comment.author}</p>
      </span>

      <div className="comment-main">
        <p className="comment-body">{props.comment.body}</p>
        <p className="comment-created">2020-10-12</p>
      </div>
    </div>
  );
};
