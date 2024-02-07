// import logo from './logo.svg';
import './App.css';
import Header from './My Component/Header';
import Footer from './My Component/Footer';
import Todos from './My Component/Todos';
import React, { useState} from 'react';
import AddTodo from './My Component/AddTodo';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete", todo);

    // deleting this way in React does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const[todos, setTodos] = useState([
    {
      sno: 1,
      title: "Tast 1",
      desc: "do the task"
    },
    {
      sno: 2,
      title: "Tast 2",
      desc: "do the task"
    },
    {
      sno: 3,
      title: "Tast 3",
      desc: "do the task"
    }
  ]);

  return (
    <>
      <Header title="ToDo" searchBar={false}/>
      <Footer/>
      <Todos todos={todos} onDelete={onDelete}/>
      <AddTodo/>
    </>
  );
}

export default App;
