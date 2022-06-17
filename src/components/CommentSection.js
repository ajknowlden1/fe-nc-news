import { SingleComment } from "./SingleComment";
import { fetchArticleComments } from "../utils/api";
import { useState, useEffect } from "react";
import { AddComment } from "./AddComment";
import Loading from "./Loading";

export const CommentSection = (props) => {
  const [comments, setComments] = useState([]);
  const [posted, setIsPosted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetchArticleComments(props.id).then(({ data }) => {
      setComments(data.comments);
      setLoading(false);
    });
  }, [props.id, loading]);

  if (props.visible === true) {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="comments-section">
        <h3 className="comments__header">Comments</h3>

        <div className="user-posted">
          <>
            {posted === true ? (
              "Comment posted!"
            ) : (
              <AddComment
                id={props.id}
                setLoading={setLoading}
                posted={posted}
                setPosted={setIsPosted}
                setComments={setComments}
              />
            )}
          </>
          <div className="comment-deleted">
            {deleted === true ? <p>Comment deleted!</p> : <></>}
          </div>
        </div>

        <div>
          {comments.length > 0 ? (
            <div className="comments-wrap">
              {comments.map((comment) => {
                return (
                  <li className="comment" key={comment.comment_id}>
                    <SingleComment
                      comment={comment}
                      setComments={setComments}
                      setLoading={setLoading}
                      setDeleted={setDeleted}
                    />
                  </li>
                );
              })}
            </div>
          ) : (
            <p id="no-comment">No comments yet...</p>
          )}
        </div>
      </div>
    );
  }
};
