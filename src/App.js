import React, {useState} from "react";
import "./App.css"
import Header from "./components/header/Header";
import Date from "./components/date/Date";
import AddToDo from "./components/addtodo/AddToDo";
import ToDoList from "./components/todolist/ToDoList";

function App() {

  const [todo, setTodo] = useState([])

  return (
    <div className="App" >
        <div className="main-head">
            <Header name="Day"/>
            <Header name="Week"/>
            <Header name="Month"/>
            <Header name="Year"/>
        </div>
        <Date day="Thursday" date="23 March"/>
        <AddToDo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
