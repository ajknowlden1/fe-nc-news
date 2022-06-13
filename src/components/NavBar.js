import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavLinks">
        <Link to="/">
          <li className="nav__link">Home</li>
        </Link>
        <Link to="/articles">
          <li className="nav__link">Articles</li>
        </Link>
        <h3>Topics</h3>
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
    </div>
  );
};

export default NavBar;
