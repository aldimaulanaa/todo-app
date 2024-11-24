import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditForm from './EditForm';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (todos.length < 20) {
      const newTodo = {
        id: uuidv4(),
        task,
        completed: false,
        isEditing: false,
      };
      setTodos([newTodo, ...todos]);
    } else {
      alert('You can only add up to 20 todos.');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditForm key={todo.id} editTodo={editTask} task={todo} />
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
