import React from "react";

let id = 0;
class Todo extends React.Component {
  state = { list: [], newTodo: "" };

  add = (text) => {
    this.setState({
      list: [...this.state.list, { id: ++id, text: text }],
    });
  };

  remove = (id) => {
    this.setState({
      list: this.state.list.filter((el) => el.id !== id),
    });
  };

  handleNewTodoChange = (event) => {
    this.setState({ ...this.state, newTodo: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="ui input">
          <input
            onChange={this.handleNewTodoChange}
            value={this.state.newTodo}
          />
        </div>
        <button
          className="ui blue button"
          onClick={() => this.add(this.state.newTodo)}
        >
          add
        </button>
        <TodoList list={this.state.list} onRemove={this.remove} />
      </div>
    );
  }
}

function TodoList({ list, onRemove }) {
  return (
    <div className="ui list">
      {list.map((item) => (
        <TodoItem item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}

function TodoItem({ item, onRemove }) {
  return (
    <div className="ui item">
      <button
        className="ui red button"
        style={{ marginRight: 5 }}
        onClick={() => onRemove(item.id)}
      >
        delete
      </button>
      {item.text}
    </div>
  );
}

export default Todo;
