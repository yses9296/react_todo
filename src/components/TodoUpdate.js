
import React, { Component } from 'react';
import '../App.css';

function TodoUpdate(props) {

  const {id, text, checked} = props.todoList
    
  const removeList = () => {
      props.removeItem(id)
  }
  const handleEditForm = () => {} //임시. 에러 

  return (
    <main>
        <div>
            <form onSubmit={handleEditForm}>
                <h2>Edit Todo</h2>
                <input type="text"/>
                <button>Edit</button>
            </form>
        </div>
    </main>
  );
}

export default TodoUpdate;