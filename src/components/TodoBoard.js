import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard(props) {
    const removeItem = props.handleRemove;
    const getItem = props.onChangedSelectedTodo;

    return (
        <ul> 
            <h1 className='todo-tit'>Todo List</h1>
            {props.todoList.map((item) => 
                <TodoItem key={item.id} item={item} removeItem={removeItem} getItem={getItem}/>
            )}
        </ul>
    );
    //todoList 안의 item들을 하나하나 map 함수를 통해 배열로 TodoItem에 전달
}
export default TodoBoard;