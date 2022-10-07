import React, { Component, useState, useRef, useCallback} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';
import TodoUpdate from './components/TodoUpdate';


function App() {
  const [inputValue, setinputValue] = useState('');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Hello, React",
      checked: false
    },
    {
      id: 2,
      text: "Click the task, when you're done",
      checked: false
    }
  ]);
  const inputEl = useRef(null);

  const newId = useRef(3);
  const onChange  = (e) => {
    setinputValue(e.target.value);
  }

  const onSubmit = (e) => {
    validation(inputValue);
    setinputValue('');
    inputEl.current.focus();
    e.preventDefault();
  }  

  const onToggle = (id) => {
    setTodoList(todoList.map( todo => 
      todo.id === id ? {...todo, checked: !todo.checked } : todo,),
    );
  }

  const handleCreate = (text) => {
    const newList = {
      id: newId.current,
      text,
      checked: false
    }

    setTodoList([...todoList, newList])
    newId.current++;
  }

  const handleRemove = (id) => {
    setTodoList( todoList.filter((todo) => todo.id !== id ))
  }
  const handleUpdate = (id) => {

  }

  const validation = (input) => {
    if(input === '' || input == null){
      return
    }
    else {
      handleCreate (input)
    }
  }

  return (
    <main>
      <div>
        <form className="header" onSubmit={onSubmit}>
          <input ref={inputEl} type="text" placeholder='Add a new task' className="addInput" 
                  onChange={onChange}/>
          <button className="addBtn" type="submit">Add</button>
        </form>

      <TodoBoard todoList={todoList} handleRemove={handleRemove} handleUpdate={handleUpdate}></TodoBoard>

      <TodoUpdate todoList={todoList} ></TodoUpdate>

      </div>
    </main>
  );
}

export default App;
