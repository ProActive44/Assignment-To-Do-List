import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  handleAdd = (e) => {
    e.preventDefault();
    const { todos, inputValue } = this.state;
    if (!inputValue) return;
    const newTodo = {
      id: Date.now(),
      title: inputValue,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
    this.setState({
      inputValue: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  handleUpdate = (text, id) => {
    let newTodo = this.state.todos;
    // if (!text) return;

    newTodo.map((todo) => {
      if (todo.id === id) {
        todo.title = text;
      }
    });
    this.setState({
      todos: newTodo,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <h1>To-Do List</h1>
          <form onSubmit={this.handleAdd}>
            <input
              type="text"
              className="textinput"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button type="submit">Add Item</button>
          </form>
        </div>
        <div className="displayTODO">
          {this.state.todos.map((todo) => (
            <div key={todo.id} className="item">
              {/* <h3>{todo.title}</h3> */}
              <input
                type="text"
                className="updateTodoInput"
                value={todo.title}
                onChange={(e) => {
                  this.handleUpdate(e.target.value, todo.id);
                }}
              ></input>
              <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
