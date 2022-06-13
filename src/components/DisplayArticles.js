import { fetchAllArticles } from "../utils/api";
import { formatDate } from "../utils/formatDate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortParams from "./SortParams";
const DisplayArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then(({ data }) => {
      if (props.topic !== "All Articles") {
        setArticles(
          data.articles.filter((article) => article.topic === props.topic)
        );
      } else {
        setArticles(data.articles);
      }

      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-wrapper">
        <h1 id="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="ArticleList">
      <h1 className="topic-header">{props.topic}</h1>
      <SortParams />
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="singleArticle">
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>

              <p className="article__author">by {article.author}</p>
              <p className="article__topic">in {article.topic}</p>
              <p className="article__created">
                {`Created on ${formatDate(article.created_at).date} at ${
                  formatDate(article.created_at).time
                }`}
              </p>
              <p className="article__time"></p>
              <p>{article.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayArticles;
