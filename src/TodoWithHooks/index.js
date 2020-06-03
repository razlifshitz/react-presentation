import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

let id = 0;
function TodoWithHooks({ user }) {
  const [list, setList] = useState([
    { id: -1, text: "Eat", user: "matan" },
    { id: -2, text: "Code", user: "raz" },
    { id: -3, text: "Sleep", user: "raz" },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [userTodosCount, setUserTodosCount] = useState(null);

  useEffect(() => {
    const filtered = list.filter((item) => item.user === user);
    setUserTodosCount(filtered.length);
  }, [user, list]);

  function add(text) {
    if (text) {
      setList([...list, { id: ++id, text: text, user: user }]);
      setNewTodo("");
    }
  }

  function remove(id) {
    setList(list.filter((el) => el.id !== id));
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
          <div>You have {userTodosCount} Todos</div>
        </>
      )}
      <TodoList list={list} onRemove={remove} user={user} />
    </div>
  );
}

export default TodoWithHooks;
