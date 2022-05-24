import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
  console.log("I am present",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  }
  const addTodo=(title,desc)=>{
    let sno;
    console.log("I am adding this task",title,desc);
    if (todos.length==0){
      sno=1;
    }else{
      let sno=todos[todos.length-1].sno+1;
    }
    
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  }

  const [todos, setTodos] = useState([
// {
//     sno: 1,
//     title: "Go to market",
//     desc:"You need to go to market to get job1 done"
//   },
//   {
//     sno: 2,
//     title: "Go to mall",
//     desc:"You need to go to mall to get job2 done"
//   },
//   {
//     sno: 3,
//     title: "Go to park",
//     desc:"You need to go to park to get job3 done"
//   }
]);
  return (
    <>
   <Header title="My ToDos List" searchBar={false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos  todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
