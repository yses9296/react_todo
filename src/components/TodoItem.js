import React, { Component } from 'react';
import '../App.css';

function TodoItem(props) {

    const {id, text, checked} = props.item
    
    const removeList = () => {
        props.removeItem(id)
    }
    const updateList =() => {
        console.log('clicked')
        props.getItem(id);
    }

    return (
        <li className='todo-item'> 
            <p>{text}</p>

            <div className="tool">
                <button onClick={updateList}>Edit</button>
                <button onClick={removeList} >Delete</button>
            </div>
        </li>
    );
}
export default TodoItem;