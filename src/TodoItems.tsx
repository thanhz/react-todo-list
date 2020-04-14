import React from "react";
import { todosDataType } from "./todosData";

function TodoItem(props: { item: todosDataType; handleChange: any }) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : undefined }>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
