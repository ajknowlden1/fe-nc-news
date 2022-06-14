import { fetchAllArticles } from "../utils/api";
import { formatDate } from "../utils/formatDate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortParams from "./SortParams";
import Loading from "./Loading";
const DisplayArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("Date created");
  const [order, setOrder] = useState("Ascending");
  // eslint-disable-next-line

  useEffect(() => {
    setIsLoading(true);

    fetchAllArticles(sort, order, props.topic).then(({ data }) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [sort, order, props.topic]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div className="ArticleList">
      <h1 className="topic-header">{props.topic}</h1>
      <SortParams setSort={setSort} setOrder={setOrder} />
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="singleArticle">
              <Link to={`/articles/${article.article_id}`}>
                <h2 className="article__title">{article.title}</h2>
              </Link>

              <p className="article__author">{article.author}</p>
              <p className="article__topic">{article.topic}</p>
              <p className="article__created">
                {`${formatDate(article.created_at).date} at ${
                  formatDate(article.created_at).time
                }`}
              </p>
              <p className="article__time"></p>
              <p className="comment-count">Comments: {article.comment_count}</p>
              <p className="article__preview">
                {
                  article.body
                    .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
                    .split("|")[0]
                }
              </p>

              <Link to={`/articles/${article.article_id}`}>
                <p className="read-article">read article</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayArticles;
