import React, {useState} from 'react';
import "./AddToDo.css"
function AddToDo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: 4,
                title: value,
                status: true
            }]
        )
        setValue('')
    }
    return (
        <div className="main-input">
            <input className="subinput" type="text" placeholder="Enter the task.." value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button className="btn-add" onClick={saveTodo}>Add</button>
        </div>
    );
}

export default AddToDo;
