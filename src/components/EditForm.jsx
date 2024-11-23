import React, { useState } from 'react';

const EditForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            editTodo(task.id, value);
        }
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                className="todo-input-edit"
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder="Edit your todo"
            />
            <button className="todo-btn-edit" type="submit">Save</button>
        </form>
    );
};

export default EditForm;
