import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersList = (props) => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data;
        setUserList(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <h1>USERS LIST:{userList.length}</h1>
      <ul>
        {userList.map((user) => {
          return (
            <Card key={user.id} style={{ fontSize: "1.5rem" }}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};
export default UsersList;
