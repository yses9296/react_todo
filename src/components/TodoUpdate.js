
import React, {useState} from 'react';
import '../App.css';

function TodoUpdate(props) {
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
            props.handleUpdate(props.id, input)
        }
      }


//   const handleEditForm = () => {} 

  return (
    <div>
        <form onSubmit={onSubmit}>
            <h2>Edit Todo</h2>
            <input type="text" placeholder='Edit Todo' value={inputValue} onChange={onChange}/>
            <button>Edit</button>
        </form>
    </div>
  );
}

export default TodoUpdate;