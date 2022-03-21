import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

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

TodosList.propTypes = {
  todos: propTypes.func.isRequired,
  handleChangeProps: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,
  deleteTodoProps: propTypes.func.isRequired,
};

export default TodosList;
