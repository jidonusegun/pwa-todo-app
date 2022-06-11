import React from 'react';
import FormComponent from './components/input';
import TodoList from './components/todoList';
import TodoContext from './components/context';
import './App.css';

function App() {
  return (
    <TodoContext>
      <div className="App">
        <h1 className="title">Todo List</h1>
        <FormComponent />
        <TodoList />
      </div>
    </TodoContext>
  );
}

export default App;
