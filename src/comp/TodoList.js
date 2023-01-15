import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Zrobic pranie", isComplete: false },
    { id: 2, text: "Sprzatnac dom", isComplete: true },
    { id: 3, text: "Kupic mleko", isComplete: false },
    { id: 4, text: "Wyjsc z psem", isComplete: true },
    { id: 5, text: "Sie zajebac", isComplete: false }
  ]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) return;
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <><h1>Asasin Skrad 70 mln ze skarbu państwa</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/></>
  );
}

export default TodoList;
