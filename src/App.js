import React from "react";
import { Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import UsersList from "./UsersList";
import UserDetail from "./UserDetail";
import AllPost from "./AllPost";
import ShowPostInfo from "./ShowPostInfo";

const App = () => {
  return (
    <div className="app">
      <Navbar className="nav">
        <Nav className="mr-3 justify-content-center ">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/posts">Posts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Route path="/users" component={UsersList} exact={true} />
      <Route path="/users/:id" component={UserDetail} />
      <Route path="/posts" component={AllPost} exact={true} />
      <Route path="/posts/:id" component={ShowPostInfo} />
    </div>
  );
};
export default App;
