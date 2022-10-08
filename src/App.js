import React, { useState, useRef } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';
import TodoCreate from './components/TodoCreate';
import TodoUpdate from './components/TodoUpdate';


function App() {
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


  const newId = useRef(3);
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


  const [selectedTodo, setSelecetedTodo] = useState(null);
  const onChangedSelectedTodo = (id) => {
    setSelecetedTodo(id);
    console.log(id)
  }
  const handleUpdate = (text) => {
    setTodoList(todoList.map( todo => 
      todo.id === selectedTodo ? {...todo, text } : todo,),
    );
  }


  return (
    <main>
      <div>
        <TodoCreate handleCreate={handleCreate}></TodoCreate>

        <TodoBoard todoList={todoList} handleRemove={handleRemove} onChangedSelectedTodo={onChangedSelectedTodo}></TodoBoard>

        <TodoUpdate todoList={todoList} handleUpdate={handleUpdate}></TodoUpdate>

      </div>
    </main>
  );
}

export default App;
