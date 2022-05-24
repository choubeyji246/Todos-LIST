import React from 'react'
import {Todo} from '../MyComponents/Todo'

export const 
Todos = (props) => {
  let Todostyle={
      backgroundColor:"Black",
      color:"white",
  }
  return (
   
    <div className='container' style={Todostyle}>
    <h3 className='my-3' >Todos LIst</h3>
    {props.todos.length===0?"No Todos to display":
    props.todos.map((todo)=>{
      return  <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    })}
   
  </div>
  )
}
