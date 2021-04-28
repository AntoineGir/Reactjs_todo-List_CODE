import React, { useState, useRef, useEffect } from 'react';
import Todo from './Todo'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai';

const Local_STORAGE_KEY = 'todoApp.todos'

function App() {
const [todos, setTodos] = useState([])
const TodoName = useRef();


//lecture des informations
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(Local_STORAGE_KEY))
  setTodos(storedTodos)
}, [])

//enregistrement des informations dans localStorage
useEffect(() => {
  localStorage.setItem(Local_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

//supprimer un to-do
function deleteTodo(id)
{
  const newTodos = todos.filter(todo => todo.id !== id)
  setTodos(newTodos)
}

//edit un to-do
function editTodo(name, id)
{
  const newTodos = [...todos]
  todos.map(todo => {
    if(todo.id === id)
    {
      todo.name = name
    }
  })
    setTodos(newTodos)
}

 //check si le todo est terminer
function checkTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.finish = !todo.finish
  setTodos(newTodos)

}

//ajouter un to-do
function addTodo(element)
{
const Name = TodoName.current.value

 if (Name !== '')
 {
   //recuperation de la date
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth()
  let d = date.getDate()
  
  let h = date.getHours();
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let dateNow = d + "/" + m + "/" + y + " - " + h + ":" + min + ":" + sec;
  
  const Id = Date.now()
  
  setTodos(prevTodos =>{
  return [...prevTodos, {id: Id, name : Name, date : dateNow, finish: false}]
  })
 }

 TodoName.current.value = null

}

  return (
    <>
    <div className="site">
      <div className="container">
          <h1>To-Do List</h1>
        <div className="todo_List">
          <div className="form">
            <input className="inputValueToDo" type="text" ref={TodoName} placeholder="ex : sport"/>
            <button className="btnAdd" onClick={addTodo}><AiOutlinePlus /></button>
          </div>
          <div className="list">
            {todos.map( todo => {
                      return <Todo todo={todo} del={deleteTodo} edit={editTodo} check={checkTodo} />
                  })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
