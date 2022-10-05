import React, { Component } from 'react';
import TodoItem from './TodoItem';

function TodoBoard(props) {
    // console.log("Todoboard",props.todoList);
    return (
        <div> 
            <h1 className='todo-tit'>Todo List</h1>
            {props.todoList.map((item, index) => <TodoItem key={index} item={item}/>)}
        </div>
    );
    //todoList 안의 item들을 하나하나 map 함수를 통해 배열로 TodoItem에 전달
}
export default TodoBoard;