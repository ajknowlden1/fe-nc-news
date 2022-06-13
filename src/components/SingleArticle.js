import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle, updateVotes } from "../utils/api";

const SingleArticle = () => {
  let params = useParams();

  const [article, setArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  useEffect(() => {
    fetchSingleArticle(params.article_id).then(({ data }) => {
      setArticle(data.article);
      console.log(data.article);
    });
  });

  const handleVotes = (increment) => {
    setArticleVotes((articleVotes) => articleVotes + increment);
    updateVotes(params.article_id, increment).then(({ data }) => {});
  };
  return (
    <div className="single-article">
      <h2 className="article__title">{article.title}</h2>
      <p>
        {article.author} in {article.topic} at {article.created_at}
      </p>
      <p>{article.body}</p>
      <span className="article__votes">
        <p>Votes: {articleVotes}</p>
        <button onClick={() => handleVotes(1)} className="vote-btn">
          Upvote
        </button>
        <button onClick={() => handleVotes(-1)} className="vote-btn">
          Downvote
        </button>
      </span>
    </div>
  );
};

export default SingleArticle;
