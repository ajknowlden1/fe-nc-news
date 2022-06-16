import { useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/Theme";
import { useContext } from "react";

export const AddComment = (props) => {
  const [commentBody, setCommentBody] = useState("");

  const { user } = useContext(UserContext);

  const handleCommentPost = (event) => {
    let commentToPost = {
      username: user.username,
      body: commentBody,
    };
    event.preventDefault();
    postComment(props.id, commentToPost).then((res) => {
      if (res.status !== 201) {
        document.getElementById("post-msg").innerHTML =
          "An error occured. Please try again.";
      }
      props.setPosted(true);

      props.setLoading(true);

      setTimeout(() => {
        props.setPosted(false);
      }, 5000);
    });
  };

  return (
    <form
      onSubmit={(event) => handleCommentPost(event)}
      className="add-comment"
    >
      <h3>Comment on this article</h3>
      <input
        className="comment-input"
        onChange={(event) => setCommentBody(event.target.value)}
      ></input>
      <button className="submit-btn">Submit</button>
    </form>
  );
};
