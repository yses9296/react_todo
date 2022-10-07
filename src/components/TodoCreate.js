import React, {useState} from 'react';
import '../App.css';

function ToDoCreate(props) {

    const [inputValue, setinputValue] = useState('');
    const onChange  = (e) => {
        setinputValue(e.target.value);
    }

    const onSubmit = (e) => {
        validation(inputValue);
        setinputValue('');
        e.preventDefault();
      }  
    const validation = (input) => {
        if(input === '' || input == null){
          return
        }
        else {
          props.handleCreate(input)
        }
      }

    return (
        <form className="header" onSubmit={onSubmit}>
            <input type="text" placeholder='할 일을 입력하세요.' className="addInput" 
                    onChange={onChange}/>
            <button className="addBtn" type="submit">Add</button>
        </form>
    )
}

export default ToDoCreate;