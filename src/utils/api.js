import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://aknowlden-nc-news.herokuapp.com/api",
});

export const fetchAllArticles = () => {
  return newsAPI.get("/articles");
};

export const fetchSingleArticle = (id) => {
  return newsAPI.get(`/articles/${id}`);
};

export const updateVotes = (id, increment) => {
  return newsAPI.patch(`/articles/${id}`, { inc_vote: increment });
};

export const fetchArticlesByTopic = (topic) => {
  return newsAPI.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles.filter((article) => article.topic === topic);
  });
};
