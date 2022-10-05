import React, { Component, useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  }

  return (
    <main>
      <div className="header">
        <input type="text" placeholder='할 일을 입력하세요.' className="addInput" 
                onChange={ e => setInputValue(e.target.value) }/>
        <button className="addBtn" onClick={addItem}>Add</button>
      </div>
      
      <TodoBoard todoList={todoList}></TodoBoard>


    </main>
  );
}

export default App;
