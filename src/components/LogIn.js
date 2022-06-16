import { useState, useEffect, useContext } from "react";

import { UserContext } from "../contexts/Theme";

export const LogIn = () => {
  return (
    <div className="log-in">
      <h2>Log in</h2>
      <form>
        <input className="username"></input>
      </form>
    </div>
  );
};
