import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ list, onRemove, user }) {
  return (
    <>
      <h2>All items:</h2>
      <div className="ui list">
        {list.map((item) => (
          <TodoItem key={item.id} item={item} onRemove={onRemove} user={user} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
