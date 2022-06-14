import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle, updateVotes } from "../utils/api";
import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { DisplayVotes } from "./DisplayVotes";

const SingleArticle = () => {
  let params = useParams();

  const [article, setArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [splitBody, setSplitBody] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(params.article_id).then(({ data }) => {
      setArticleVotes(data.article.votes);
      setArticle(data.article);
      setSplitBody(
        data.article.body.replace(/([.?!])\s+(?=[A-Z])/g, "$1|").split("|")
      );
      setIsLoading(false);
    });
  }, [params.article_id]);

  const handleVotes = (increment) => {
    setArticleVotes((articleVotes) => articleVotes + increment);
    updateVotes(params.article_id, increment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        alert("an error has occurred");
      });
  };

  if (isLoading) {
    return (
      <div className="loading-wrap">
        <Loading isLoading={isLoading} />
      </div>
    );
  }
  return (
    <div className="single-article">
      <div className="single-article__header">
        <h2 className="article__title-underline">{article.title}</h2>
        <span className="article-info">
          <p className="article__author-centre">{article.author}</p>
          <Link to={`/topics/${article.topic}`}>
            <p className="article__topic-underline">{article.topic}</p>
          </Link>

          <p className="article__created">
            {formatDate(article.created_at).date}
          </p>
        </span>
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
      <DisplayVotes articleVotes={articleVotes} handleVotes={handleVotes} />
    </div>
  );
};

export default SingleArticle;
