import React, { useState } from "react";
import Credentials from "../Credentials";
import Todo from "./Todo";

function TodoApp() {
  const [user, setUser] = useState("");

  function handleSignIn(value) {
    setUser(value);
  }

  function handleSignOut() {
    setUser("");
  }

  return (
    <>
      <div className="ui secondary pointing menu">
        <div className="item">
          <h1>Todo App</h1>
        </div>
        <Credentials
          user={user}
          handleSignIn={handleSignIn}
          handleSignOut={handleSignOut}
        ></Credentials>
      </div>
      <Todo user={user}></Todo>
    </>
  );
}

export default TodoApp;
