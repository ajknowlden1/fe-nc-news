import axios from "axios";

const newsAPI = axios.create({
  baseURL: "hhttps://nc-news-0jrl.onrender.com/api",
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
  return newsAPI
    .get(`/articles/${id}`)

    .catch((response) => response);
};

export const updateVotes = (id, increment) => {
  return newsAPI
    .patch(`/articles/${id}`, { inc_vote: increment })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const fetchArticlesByTopic = (topic) => {
  return newsAPI.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  });
};

export const postArticle = (user, title, body, topic) => {
  return newsAPI
    .post(`/articles`, {
      author: user.username,
      title: title,
      body: body,
      topic: topic,
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const deleteArticle = (id) => {
  return newsAPI.delete(`/articles/${id}`);
};

export const fetchArticleComments = (id) => {
  return newsAPI.get(`/articles/${id}/comments`);
};

export const postComment = (id, commentToPost) => {
  return newsAPI.post(`/articles/${id}/comments`, commentToPost).then((res) => {
    return res;
  });
};

export const deleteComment = (id) => {
  return newsAPI.delete(`/comments/${id}`);
};

export const fetchUsers = (id) => {
  return newsAPI.get(`/users`).then((res) => {
    return res.data;
  });
};
