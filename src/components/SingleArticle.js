import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle, updateVotes } from "../utils/api";
import { formatDate } from "../utils/formatDate";

const SingleArticle = () => {
  let params = useParams();

  const [article, setArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(params.article_id).then(({ data }) => {
      console.log(data);
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [params.article_id]);

  const handleVotes = (increment) => {
    setArticleVotes((articleVotes) => articleVotes + increment);
    updateVotes(params.article_id, increment);
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="single-article">
      <h2 className="article__title-underline">{article.title}</h2>
      <span className="article-info">
        <p className="article__author-centre">{article.author}</p>
        <p className="article__topic-underline">{article.topic}</p>
        <p className="article__created">
          {formatDate(article.created_at).date}
        </p>
      </span>

      <p className="article__body">{article.body.replace(/\.$/gm, `. \n `)}</p>
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
