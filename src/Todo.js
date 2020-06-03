import React from "react";

let id = 0;
class Todo extends React.Component {
  state = { list: [], newTodo: "" };

  componentDidMount() {
    this.setState({
      ...this.state,
      list: [
        { id: -1, text: "Eat" },
        { id: -2, text: "Code" },
        { id: -3, text: "Sleep" },
      ],
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}

  add = (text) => {
    if (text) {
      this.setState({
        list: [
          ...this.state.list,
          { id: ++id, text: text, user: this.props.user },
        ],
        newTodo: "",
      });
    }
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
      <div style={{ margin: "0 auto", width: 255 }}>
        {this.props.user && (
          <>
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
          </>
        )}
        <TodoList
          list={this.state.list}
          onRemove={this.remove}
          user={this.props.user}
        />
      </div>
    );
  }
}

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

export default Todo;
