import React from 'react'
import './Todo.css'
import { BsFillTrashFill } from "react-icons/bs";
export default function Todo({todo, del, edit, check}) {

    let inputFalseOrTrue = todo.finish
    function todoClick(name, id)
    {
        edit(name, id)
    }

    function todoCheked()
    {
        check(todo.id)
    }

    function delTodo()
    {
        del(todo.id)
    }

    return (
            <div key={todo.toString()} className="todo">
                <div className="todo-check">
                    <input type="checkbox" checked={todo.finish} onChange={todoCheked}/>
                </div>
                <div className="todo-content">
                    <div>
                        <input size="13" type="text" id={"inputText:"+todo.id} className={"inputClass"+inputFalseOrTrue} value={todo.name} onChange={e => todoClick(e.target.value, todo.id)}/>
                    </div>
                    <div>
                        <label className="lblDate">{todo.date}</label>
                    </div>
                </div>
                <div className="todo-delete">
                    <button onClick={delTodo}><BsFillTrashFill/></button>
                </div>
            </div>

    )
}
