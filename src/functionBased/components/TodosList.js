import React from "react";
import ReactDom from "react-dom";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  const { todos } = props;
  const { setUpdate } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;
  return (
    <ul className="todo-wrapper">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
