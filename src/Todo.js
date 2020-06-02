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
        <input onChange={this.handleNewTodoChange} value={this.state.newTodo} />
        <button onClick={() => this.add(this.state.newTodo)}>+</button>
        {this.state.list.map((item) => (
          <div>
            <button
              style={{ marginRight: 5 }}
              onClick={() => this.remove(item.id)}
            >
              -
            </button>
            {item.text}
          </div>
        ))}
      </div>
    );
  }
}

export default Todo;
