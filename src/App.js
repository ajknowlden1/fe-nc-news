import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";
import Coding from "./components/Coding";
import Football from "./components/Football";
import Cooking from "./components/Cooking";
import { useState } from "react";
import { UserContext } from "./contexts/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    password: "password123",
    isLoggedIn: true,
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <div className="sideNav">
            <Header />

            <NavBar />
          </div>

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
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
