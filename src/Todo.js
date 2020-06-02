import React from "react";

let id = 0;
class Todo extends React.Component {
  state = { list: [] };

  componentDidMount() {
    this.setState({
      list: [
        { id: -1, text: "Eat" },
        { id: -2, text: "Sleep" },
        { id: -3, text: "Repeat" },
      ],
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}

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

  handleChange = (event) => {
    this.setState({ ...this.state, value: event.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.value} />
        <button onClick={() => this.add(this.state.value)}>+</button>
        <ToDoList list={this.state.list} onRemove={this.remove} />
      </div>
    );
  }
}

function ToDoList({ list, onRemove }) {
  return list.map((item) => (
    <TodoItem key={item.id} item={item} onRemove={onRemove} />
  ));
}

function TodoItem({ item, onRemove }) {
  return (
    <div>
      <button style={{ marginRight: 5 }} onClick={() => onRemove(item.id)}>
        -
      </button>
      {item.text}
    </div>
  );
}

export default Todo;