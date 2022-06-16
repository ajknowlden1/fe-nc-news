import { fetchUsers } from "../utils/api";
import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
      console.log(users);
    }, []);
  });
  return (
    <ul className="user-list">
      {users.map((user) => {
        return (
          <li key={user.name}>
            <div className="user-profile">
              <h2>{user.username}</h2>
              <p>{user.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
