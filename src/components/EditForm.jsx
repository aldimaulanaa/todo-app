import React, { useState } from 'react';

const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      editTodo(task.id, value.trim());
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input-edit"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Edit your todo"
      />
      <button className="todo-btn-edit" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditForm;
