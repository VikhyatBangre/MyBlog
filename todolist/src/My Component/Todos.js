import React from "react";
import TodoItems from "./TodoItems";

export default function Todos(props) {
  return (
    <div>
      <div className="container">
        <h3>Todo List</h3>
        {props.todos.length==0? "All tasks are completed.":
        props.todos.map((todo)=>{                     
          return <TodoItems todo={todo} onDelete={props.onDelete}/> 
        })} 
        {/* <TodoItems todo={props.todos[2]} />  */}
      </div>
    </div>
  );
}
