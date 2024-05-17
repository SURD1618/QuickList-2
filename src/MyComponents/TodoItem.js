import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem;








// NOTES

// onClick={() => onDelete(todo)}:

// This approach uses an arrow function as the event handler.
// When the component renders, it creates a new function instance for each render cycle.
// The function is created inline, directly within the render method.
// It ensures that the correct todo value is passed to the onDelete function when the button is clicked.


// onClick={onDelete()}:

// This approach directly calls the onDelete function during rendering.
// It doesn’t wait for any user interaction (e.g., button click) to execute.
// If onDelete has any side effects (such as modifying state), those side effects will occur immediately during rendering.
// This is likely not the intended behavior, as you typically want the function to execute only when the button is clicked.

// Recommendation:

// Use the first approach (onClick={() => onDelete(todo)}) because it correctly defers the execution of onDelete until the button is clicked.
// Avoid calling functions directly within the render method unless you have a specific use case (e.g., memoization or initialization).



// const TodoItem = (props) => {
//   return (
//     <div>
//       <h4>{props.todo.title}</h4>
//       <p>{props.todo.desc}</p>
//       <button className="btn btn-sm btn-danger" onClick={()=> {props.onDelete(props.todo)}}>Delete</button>
//     </div>
//   )
// }

// export default TodoItem;


