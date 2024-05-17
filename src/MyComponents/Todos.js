import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let todosStyle ={
    minHeight: "70vh"
  }
  return (
    <div className="container my-3" style={todosStyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No todos to display" : props.todos.map((items) => {
        return (
          <>
            <TodoItem todo={items} key={items.sno} onDelete={props.onDelete}/> <hr/>
          </>
        )
      })
      }
      
      
    </div>
  )
}

export default Todos;
