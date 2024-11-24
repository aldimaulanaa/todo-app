import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ task, editTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <p className={task.completed ? 'completed' : ''}>{task.task}</p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="edit-icon"
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
