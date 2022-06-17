import { fetchAllArticles } from "../utils/api";
import { useState, useEffect } from "react";

export const MostRecent = () => {
  const [recent, setRecent] = useState({});
  useEffect(() => {
    fetchAllArticles("created_at", "descending", "all").then(({ data }) => {
      setRecent(data.articles[0]);
    });
  }, []);

  return (
    <div className="most-recent">
      <h2>Most Recent</h2>
      <h3>{recent.title}</h3>
      <p>{recent.author}</p>
      <p>{recent.topic}</p>
    </div>
  );
};
