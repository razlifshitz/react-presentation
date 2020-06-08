import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { createNewTodo, deleteTodo } from "../actionsCreators";

function TodoWithHooks({ user, list, createNewTodo, deleteTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function add(text) {
    if (text) {
      createNewTodo(text, user);
      setNewTodo("");
    }
  }

  function remove(id) {
    deleteTodo(id, user);
  }

  return (
    <div style={{ margin: "0 auto", width: 255 }}>
      {user && (
        <>
          <div className="ui input">
            <input
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
          </div>
          <button className="ui blue button" onClick={() => add(newTodo)}>
            add
          </button>
        </>
      )}
      <TodoList list={list} onRemove={remove} user={user} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: state.list,
    user: state.activeUserReducer,
  };
}

export default connect(mapStateToProps, { createNewTodo, deleteTodo })(
  TodoWithHooks
);
