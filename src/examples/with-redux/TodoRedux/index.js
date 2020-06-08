import React, { useState } from "react";
import Credentials from "./Credentials";
import Todo from "./Todo";

function TodoApp() {
  return (
    <>
      <div className="ui secondary pointing menu">
        <div className="item">
          <h1>Todo App</h1>
        </div>
        <Credentials />
      </div>
      <Todo />
    </>
  );
}

export default TodoApp;
