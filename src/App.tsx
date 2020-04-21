import React from "react";
import "./App.css";
import TodoItem from "./TodoItems";
import { todosData, todosDataType } from "./todosData";

type MyProps = {};
type MyState = {
  todos: todosDataType[];
};
class App extends React.Component<MyProps, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: todosData,
    };
  }
  // state: MyState = {
  //   todos: todosData,
  // };

  handleChange = (id: number): void | todosDataType => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, //id,text,completed
          completed: !todo.completed, //update completed
        };
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  };

  render() {
    const todoItem = this.state.todos.map((data) => (
      <TodoItem key={data.id} item={data} handleChange={this.handleChange} />
    ));

    return (
      <div className='todo-list'>
        <h1>Todo-List</h1>
        {todoItem}
        <p>This todo-list was created using ReactJS and Typescript</p>
      </div>
    );
  }
}

export default App;
