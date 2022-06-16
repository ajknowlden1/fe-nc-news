import { formatDate } from "../utils/formatDate";
import { UserContext } from "../contexts/Theme";
import { useContext } from "react";
import { deleteComment } from "../utils/api";
export const SingleComment = (props) => {
  const { date, time } = formatDate(props.comment.created_at);
  const { user } = useContext(UserContext);
  const handleDeleteComment = (id) => {
    deleteComment(id).then(() => {
      props.setLoading(true);
      props.setDeleted(true);
      setTimeout(() => {
        props.setDeleted(false);
      }, 5000);
    });
  };
  return (
    <div className="single-comment">
      <span className="user-info">
        <span className="material-symbols-outlined">person_filled</span>
        <p className="comment-username">{props.comment.author}</p>
      </span>

      <div className="comment-main">
        {props.comment.author === user.username ? (
          <button
            className="delete-button"
            onClick={() => handleDeleteComment(props.comment.comment_id)}
          >
            <span class="material-symbols-outlined">close</span>
          </button>
        ) : (
          <div></div>
        )}
        <p className="comment-body">{props.comment.body}</p>
        <p className="comment-created">
          {date} at {time}
        </p>
      </div>
    </div>
  );
};
