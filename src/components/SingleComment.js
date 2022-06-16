import { formatDate } from "../utils/formatDate";

export const SingleComment = (props) => {
  const { date, time } = formatDate(props.comment.created_at);
  console.log(date, time);
  return (
    <div className="single-comment">
      <span className="user-info">
        <span className="material-symbols-outlined">person_filled</span>
        <p className="comment-username">{props.comment.author}</p>
      </span>

      <div className="comment-main">
        <p className="comment-body">{props.comment.body}</p>
        <p className="comment-created">
          {date} at {time}
        </p>
      </div>
    </div>
  );
};
