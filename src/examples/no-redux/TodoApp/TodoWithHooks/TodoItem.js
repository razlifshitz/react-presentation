import React from "react";

function TodoItem({ item, onRemove, user }) {
  return (
    <div className="ui item">
      {user === item.user && (
        <button
          className="ui red mini button"
          style={{ marginRight: 5 }}
          onClick={() => onRemove(item.id)}
        >
          delete
        </button>
      )}
      {item.text}
    </div>
  );
}

export default TodoItem;
