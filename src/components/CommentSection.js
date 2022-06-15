import { SingleComment } from "./SingleComment";
import { fetchArticleComments } from "../utils/api";
import { useState, useEffect } from "react";

export const CommentSection = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleComments(props.id).then(({ data }) => {
      console.log(data);
      setComments(data.comments);
    });
  }, [props.id]);

  if (props.visible === true)
    return (
      <div className="comments-section">
        <h3 className="comments__header">Comments</h3>
        <div>
          {comments.length > 0 ? (
            <div className="comments-wrap">
              {comments.map((comment) => {
                return (
                  <li className="comment" key={comment.comment_id}>
                    <SingleComment comment={comment} />
                  </li>
                );
              })}
            </div>
          ) : (
            "No comments yet..."
          )}
        </div>
      </div>
    );
};
