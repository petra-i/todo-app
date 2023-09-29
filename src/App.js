import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import DeleteCompletedTasks from './components/DeleteCompletedTasks';
import FilterButtons from './components/FilterButtons';




function App() {
  const [todos, setTodos] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

   useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, { text, completed: false }]);
    }
  };

  const setCompleted = (id) => {
    const updatedTodos = [...todos];
    updatedTodos[id].completed = !updatedTodos[id].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(id, 1);
    setTodos(updatedTodos);
  };

  const deleteCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const setFilterOption = (option) => {
    setFilter(option);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className="App">
      <h1 className="app-title">My tasks</h1>
       <FilterButtons setFilterOption={setFilterOption} />
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        setCompleted={setCompleted}
        deleteTodo={deleteTodo}
      />
       <DeleteCompletedTasks deleteCompleted={deleteCompleted} />
    </div>
  );
}

export default App;
