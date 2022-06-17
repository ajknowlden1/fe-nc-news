import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <h2 className="not-found">
      Page not found. Double check the URL and try again.
      <Link to="/">Return to homepage</Link>
    </h2>
  );
};
