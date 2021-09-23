import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const ShowPostInfo = (props) => {
  //   console.log(props);
  const { id } = props.match.params;
  const [userPost, setUserPost] = useState([]);
  const [userName, setName] = useState("");
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        const result = response.data[0];
        setUserPost(result);
      })
      .catch((err) => {
        alert(err.message);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        const result = response.data;
        setComment(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);
  useEffect(() => {
    if (userPost.userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userPost.userId}`)
        .then((response) => {
          const result = response.data.name;
          //   console.log(result);
          setName(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [userPost.userId]);
  return (
    <div>
      <Card>
        <Card.Header style={{ fontSize: "1.5rem" }}>
          <b>USER NAME:{userName}</b>
        </Card.Header>
        <Card.Title style={{ paddingLeft: "15px", fontSize: "1.6rem" }}>
          <b>TITLE:</b>
          {userPost.title}
        </Card.Title>
      </Card>
      <Card.Title style={{ paddingLeft: "15px", fontSize: "1.6rem" }}>
        <b> BODY:</b>
        {userPost.body}
      </Card.Title>

      <hr />
      <h1>COMMENTS</h1>
      <ol>
        {comment.map((com) => {
          return (
            <li key={com.id} style={{ fontSize: "1.2rem" }}>
              {com.body}
            </li>
          );
        })}
      </ol>
      <hr />
      <Link
        to={`/users/${userPost.userId}`}
        style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}
      >
        More posts of author:{userName}
      </Link>
    </div>
  );
};
export default ShowPostInfo;
