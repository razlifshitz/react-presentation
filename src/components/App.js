import React, { useState } from "react";
import HellowWorld from "./HelloWorld";
import PropsDemo from "./PropsDemo";
import Todo from "./Todo";
import TodoWithHook from "./TodoWithHooks";
import HighlightApp from "./Highlight";

function App() {
  return (
    <>
      {/* <HellowWorld /> */}

      {/* Props itroduction */}
      {/* <PropsDemo /> */}

      {/* Highligth - comparison to Angular */}
      {/* <HighlightApp /> */}

      <Todo />
      {/* TODO HOOKS + REDUX */}
    </>
  );
}

export default App;
