import React from 'react';
import PropsDemo from './PropsDemo'

function App () {
    return <Todo></Todo>
}
let id = 0;
class Todo extends React.Component {
    state = { list: [] };

    add = (text) => {
        this.setState({
            list: [...this.state.list, {id: ++id, text: text}]
        });
    };

    remove = (id) => {
        this.setState({
            list: this.state.list.filter(el => el.id !== id)
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
                <ToDoList list={this.state.list} onRemove={this.remove}/>
            </div>
        )
    }
}

function ToDoList({list, onRemove}) {
    return list.map(item =>
        <TodoItem key={item.id} item={item} onRemove={onRemove}/>
    )
}

function TodoItem ({item, onRemove}) {
    return <div>
        {item.text}
        <button onClick={() => onRemove(item.id)}>-</button>
    </div>
}

export default App;
