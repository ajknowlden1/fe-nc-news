import { UserContext } from "../contexts/Theme";
import { useContext } from "react";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <header>
      <h1 className="header">NC News</h1>
      <span className="logged-in">Logged in as: {user.username}</span>
    </header>
  );
};

export default Header;
