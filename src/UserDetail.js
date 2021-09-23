import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserDetail = (props) => {
  const { id } = props.match.params;
  const [userName, setName] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const result = response.data.name;
        setName(result);
      })
      .catch((err) => {
        alert(err.message);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        const result = response.data;
        setPosts(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <b>USER NAME:{userName}</b>
          </Card.Title>
          <Card.Title>
            <b>POSTS WRITTEN BY USER</b>
          </Card.Title>
        </Card.Body>
      </Card>
      <ul>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}
            >
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};
export default UserDetail;
