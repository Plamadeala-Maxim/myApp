import React, {useState} from 'react';

function ToDoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {

        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function completeTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id} className="list-items">
                        {
                            edit === item.id ?
                                <div>
                                    <input className="edit-input" onChange={(e)=>setValue(e.target.value)} value={value}/>
                                </div> :
                                <div className="main-text">{item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <button className="btn-add" onClick={() => saveTodo(item.id)}>Save</button>
                                </div> :
                                <div className="func">
                                    <input className="checkbox" type="checkbox" onClick={()=> completeTodo(item.id)}/>
                                    <div className="func-buttons">
                                        <button className="btn-add" onClick={()=> editTodo(item.id, item.title)}>Edit</button>
                                        <button className="btn-add" onClick={()=> deleteTodo(item.id)}>Delete</button>
                                    </div>
                                </div>
                        }

                    </div>
                ))
            }
        </div>
    );
}

export default ToDoList;
