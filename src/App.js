import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React,{useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    console.log("i am onDelete", todo)
    // Updates the todos state by filtering out the todo item from the existing list.
    // The filter function checks each element (e) in the todos array. If an element is not equal to the specified todo, it remains in the filtered array.
    // The filtered array is then set as the new state using setTodos.
    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("i am adding",title, desc)

    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
    
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <div>
      <Router>
        <Header title="My Todos List" searchbar={false}/>   {/* <Header title="My Todos List"/> */}
        
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>
          }/>
          <Route path="/about" element={<About />} /> 
        </Routes>
         
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
