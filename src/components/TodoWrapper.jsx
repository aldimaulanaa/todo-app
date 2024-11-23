import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm"; 

const TodoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("todo")) || [];
    });

    const updateLocalStorage = (newTodos) => {
        setTodos(newTodos);
        localStorage.setItem("todo", JSON.stringify(newTodos));
    };

    const addTodo = (todo) => {
        if (todos.length < 20) {  
            const newTodo = [
                {
                    id: uuidv4(),
                    task: todo,
                    completed: false,
                    isEditing: false,
                },
                ...todos  
            ];
            updateLocalStorage(newTodo);
        } else {
            alert("You can only add up to 20 todo items.");
        }
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        updateLocalStorage(newTodos);
    };

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        updateLocalStorage(newTodos);
    };

    const editTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        );
        updateLocalStorage(newTodos);
    };

    const editTask = (id, task) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: false } : todo
        );
        updateLocalStorage(newTodos);
    };

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => 
                todo.isEditing ? (
                    <EditForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <TodoItem 
                        key={todo.id} 
                        task={todo} 
                        editTodo={editTodo} 
                        deleteTodo={deleteTodo} 
                        toggleComplete={toggleComplete} 
                    />
                )
            )}
        </div>
    );
};

export default TodoWrapper;
