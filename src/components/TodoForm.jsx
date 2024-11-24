import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div className="todo-header">
                <h2>Let's Get Things Done!</h2>
                <p>One Step Closer to Your Goals</p>
            </div>

            <div className="input-container">
                <input
                    type="text"
                    className="todo-input"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="Add your todo"
                />
                <button className="todo-btn" type="submit">Add</button>
            </div>
        </form>
    );
};

export default TodoForm;
