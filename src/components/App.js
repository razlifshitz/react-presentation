import React, { useState } from "react";
import PropsDemo from "./PropsDemo/PropsDemo";
import TodoWithHook from "./TodoWithHooks";
import Credentials from "./credentials";
import HighlightApp from "./Highlight";

function App() {
  return (
    <>
      {/* <div className="ui secondary pointing menu">
        <div className="item">
          <h1>Todo App</h1>
        </div>
        <Credentials></Credentials>
      </div>
      <TodoWithHook></TodoWithHook> */}
      <HighlightApp></HighlightApp>
    </>
  );
}

export default App;
