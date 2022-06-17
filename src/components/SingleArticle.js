import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { deleteArticle, fetchSingleArticle, updateVotes } from "../utils/api";
import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { DisplayVotes } from "./DisplayVotes";
import { CommentSection } from "./CommentSection";
import { UserContext } from "../contexts/Theme";

const SingleArticle = (props) => {
  let params = useParams();
  const [visible, setVisible] = useState(false);
  const [article, setArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [splitBody, setSplitBody] = useState([]);
  const [voted, setVoted] = useState([]);
  const [error, setError] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(params.article_id)
      .then((response) => {
        if (response.status !== 200) {
          setError(true);
          setIsLoading(false);
          return;
        }
        setArticleVotes(response.data.article.votes);
        setArticle(response.data.article);
        setSplitBody(
          response.data.article.body
            .replace(/([.?!])\s+(?=[A-Z])/g, "$1|")
            .split("|")
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [params.article_id, deleted]);

  const handleComments = () => {
    visible === false ? setVisible(true) : setVisible(false);
  };

  const handleVotes = (increment) => {
    increment === 1 ? setVoted(true) : setVoted(false);
    setArticleVotes((articleVotes) => articleVotes + increment);

    updateVotes(params.article_id, increment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        alert("an error has occurred");
      });
  };

  const handleDeleteArticle = (id) => {
    setIsLoading(true);
    setDeleted(true);
    setIsLoading(false);
    deleteArticle(id).then(() => {
      return;
    });
  };

  if (deleted) {
    return (
      <div className="delete-article-success">
        <h2>Article deleted</h2>
        <Link to={"/articles"}>Return to article list</Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-wrap">
        <Loading isLoading={isLoading} />
      </div>
    );
  }

  if (error) {
    return (
      <h2 className="not-found">
        Article not found. Double check the URL and try again.
        <Link to="/">Return to homepage</Link>
      </h2>
    );
  }
  return (
    <div className="single-article">
      <div className="single-article__header">
        <h2 className="article__title-underline">{article.title}</h2>
        <div id="delete">
          {article.author === user.username ? (
            <button
              className="delete-button"
              onClick={() => handleDeleteArticle(article.article_id)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          ) : (
            <></>
          )}
        </div>

        <span className="article-info">
          <p className="article__author-centre">{article.author}</p>
          <Link to={`/topics/${article.topic}`}>
            <p className="article__topic-underline">{article.topic}</p>
          </Link>

          <p className="article__created">
            {formatDate(article.created_at).date}
          </p>
        </span>
        <DisplayVotes
          articleVotes={articleVotes}
          handleVotes={handleVotes}
          voted={voted}
        />
      </div>

      <div className="article__body">
        <ul className="split-body">
          {splitBody.map((sentence) => {
            return (
              <li
                id={`article__body--${splitBody.indexOf(sentence)}`}
                key={`${sentence}`}
              >
                {sentence}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={() => {
          handleComments();
        }}
        className="show-comments"
      >
        {visible === false ? "show comments" : "hide comments"}
      </button>

      <CommentSection
        comment_count={article.comment_count}
        visible={visible}
        id={params.article_id}
        loading={setIsLoading}
      />
    </div>
  );
};

export default SingleArticle;
