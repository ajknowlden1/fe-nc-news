import { postArticle } from "../utils/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
export const PostArticle = (props) => {
  const [topic, setTopic] = useState("Coding");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [posted, setPosted] = useState(false);
  const [newID, setNewID] = useState();

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    return postArticle(props.user, title, body, topic.toLowerCase()).then(
      ({ data }) => {
        setNewID(data.article.article_id);
        setLoading(false);
        setPosted(true);
      }
    );
  };

  if (loading) return <Loading />;
  if (posted)
    return (
      <span className="article-post-success">
        <h2>Article posted!</h2>
        <Link to={`/articles/${newID}`}>Go to your article</Link>
      </span>
    );

  return (
    <div className="topic-page">
      <form onSubmit={(event) => handleSubmit(event)} className="post-article">
        <h2>Post an article</h2>
        <div className="article-topic-post">
          <label htmlFor="topic">Topic</label>
          <select
            onChange={(event) => setTopic(event.target.value)}
            defaultValue={topic}
            className="topic-select"
            id="topic"
          >
            <option>Coding</option>
            <option>Cooking</option>
            <option>Football</option>
          </select>
        </div>
        <div className="article-title-post">
          <label htmlFor="title-input">Article title</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            id="title-input"
          ></input>
        </div>
        <div className="article-body-post">
          <label htmlFor="body-input">Article body</label>
          <textarea
            onChange={(event) => setBody(event.target.value)}
            id="body-input"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
