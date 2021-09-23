import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./AllPost.css";
const AllPost = (props) => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const result = response.data;
        setAllPost(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div className="postStyle">
      <h1>Total Posts:{allPost.length}</h1>
      <Card>
        {allPost.map((post) => {
          return (
            <Card
              key={post.id}
              style={{ listStyle: "none", paddingLeft: "2rem" }}
            >
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </Card>
          );
        })}
      </Card>
    </div>
  );
};
export default AllPost;
