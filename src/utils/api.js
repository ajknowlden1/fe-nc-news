import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://aknowlden-nc-news.herokuapp.com/api",
});

export const fetchAllArticles = (sort, order) => {
  let sortBy =
    sort === "Date created"
      ? "created_at"
      : sort.toLowerCase().replace(" ", "_");
  let orderBy = order === "Ascending" ? "asc" : "desc";

  console.log(`/articles?sort_by=${sortBy}order=${orderBy}`);

  return newsAPI.get(`/articles?sort_by=${sortBy}&order=${orderBy}`);
};

export const fetchSingleArticle = (id) => {
  return newsAPI.get(`/articles/${id}`);
};

export const updateVotes = (id, increment) => {
  return newsAPI
    .patch(`/articles/${id}`, { inc_vote: increment })
    .then((res) => {
      console.log("votes updated succesfully");
    });
};

export const fetchArticlesByTopic = (topic) => {
  return newsAPI.get("/articles").then(({ data }) => {
    return data.articles.filter((article) => article.topic === topic);
  });
};
