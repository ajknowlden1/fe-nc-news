import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://aknowlden-nc-news.herokuapp.com/api",
});

export const fetchAllArticles = (sort, order, topic) => {
  let sortBy =
    sort === "Date created"
      ? "created_at"
      : sort.toLowerCase().replace(" ", "_");
  let orderBy = order === "Ascending" ? "asc" : "desc";

  if (topic !== "all") {
    return newsAPI.get(
      `/articles?topic=${topic}&sort_by=${sortBy}&order=${orderBy}`
    );
  } else return newsAPI.get(`/articles?sort_by=${sortBy}&order=${orderBy}`);
};

export const fetchSingleArticle = (id) => {
  return newsAPI.get(`/articles/${id}`);
};

export const updateVotes = (id, increment) => {
  return newsAPI
    .patch(`/articles/${id}`, { inc_vote: increment })
    .then((res) => {
      return res;
    });
};

export const fetchArticlesByTopic = (topic) => {
  return newsAPI.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  });
};
