import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Random User API Fetch</h1>

      {loading ? (
        <h2>Loading Users...</h2>
      ) : (
        <div className="card-container">
          {users.map((user, index) => (
            <div className="card" key={index}>
              <img
                src={user.picture.large}
                alt="user"
              />

              <h2>
                {user.name.first}{" "}
                {user.name.last}
              </h2>

              <p>{user.email}</p>

              <p>{user.location.country}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;