import React, { Component } from 'react';
import '../App.css';

function TodoItem(props) {

    return (
        <div className='todo-item'> 
            {props.item}
        </div>
    );
    
}
export default TodoItem;