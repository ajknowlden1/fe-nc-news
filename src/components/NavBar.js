import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  useEffect(() => {
    let width = document.getElementById("root").clientWidth;

    if (width < 600) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const [navType, setNavType] = useState("NavBar");

  const handleScroll = (event) => {
    if (event.path[1].pageYOffset >= 90) {
      setNavType("NavBar-static");
    } else setNavType("NavBar");
  };
  return (
    <nav className={navType}>
      <ul className="NavLinks">
        <Link to="/">
          <li className="nav__link">Home</li>
        </Link>
        <Link to="/articles">
          <li className="nav__link">Articles</li>
        </Link>
        <Link to={"/topics/coding"}>
          <li className="nav__link">Coding</li>
        </Link>
        <Link to={"/topics/football"}>
          <li className="nav__link">Football</li>
        </Link>
        <Link to={"/topics/cooking"}>
          <li className="nav__link">Cooking</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
