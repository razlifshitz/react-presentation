import React, { useState } from "react";
import HellowWorld from "./examples/no-redux/HelloWorld";
import PropsDemo from "./examples/no-redux/PropsDemo";
import Clock from "./examples/no-redux/Clock";
import HighlightApp from "./examples/no-redux/Highlight";
import Todo from "./examples/no-redux/TodoApp/Todo";
import TodoWithHook from "./examples/no-redux/TodoApp/TodoWithHooks";
import TodoWithRedux from "./examples/with-redux/TodoRedux";

function App() {
  return (
    <>
      {/* <HellowWorld /> */}

      {/* Props itroduction */}
      {/* <PropsDemo /> */}

      {/* State introduction */}
      {/* <Clock /> */}

      {/* Highligth - comparison to Angular */}
      <HighlightApp />

      {/* TODO APP */}
      {/* <Todo /> */}
      {/* <TodoWithHook /> */}

      {/* TODO HOOKS + REDUX */}
      {/* <TodoWithRedux /> */}
    </>
  );
}

export default App;
