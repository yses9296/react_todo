import React, { Component, useState, useRef, useCallback} from 'react';
import '../App.css';
import TodoBoard from './components/TodoBoard'

function ToDoCreate(props) {

    const [inputValue, setinputValue] = useState('');
    const handleChange = (e) => {
        setinputValue(e.target.value);
    }

    const onSubmit = (e) => {
        props.handleCreate(inputValue)
        e.preventDefault();
    }  

    return (
        <div>
        <form className="header" onSubmit={onSubmit}>
            <input type="text" placeholder='할 일을 입력하세요.' className="addInput" 
                    onChange={handleChange}/>
            <button className="addBtn" type="submit">Add</button>
        </form>

        <TodoBoard todoList={props.todoList} handleRemove={props.handleRemove}></TodoBoard>

        </div>
    )
}

export default ToDoCreate;