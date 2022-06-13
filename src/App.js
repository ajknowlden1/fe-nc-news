import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";
import Coding from "./components/Coding";
import Football from "./components/Football";
import Cooking from "./components/Cooking";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-display">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route
              path="/articles/:article_id"
              element={<SingleArticle />}
            ></Route>
            <Route path="/topics/coding" element={<Coding />}></Route>
            <Route path="/topics/football" element={<Football />}></Route>
            <Route path="/topics/cooking" element={<Cooking />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
