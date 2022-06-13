import { fetchAllArticles } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DisplayArticles from "./DisplayArticles";

const ArticleList = () => {
  return <DisplayArticles topic="All Articles"></DisplayArticles>;
};

export default ArticleList;
