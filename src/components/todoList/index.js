import React, { useState, useContext } from 'react';
import Dialog from '../dialog'
import { TodoContext } from '../context';

export default function TodoList() {
    const {todos, setTodos} = useContext(TodoContext);
    const [open, setOpen] = useState(false)
    const [activeTodo, setActiveTodo] = useState('')

    const deleteTodo = () => {
        const index = todos.indexOf(activeTodo)
        todos.splice(index,1)
        setTodos([...todos])
        setOpen(false)
    }
    
    return (
        <div className="todo-list">
            <Dialog
                open={open}
                close={setOpen}
                title="Delete"
                children={<p className="text-center">Are you sure you want to delete?</p>}
                proceedButton={() => deleteTodo()}
            />
            <ul>
                {todos?.length > 0 ?
                    todos?.map((todo, index) => {
                        return (
                            <li key={index}>{todo} <div onClick={() => {setOpen(true); setActiveTodo(todo)}}><img src="/img/delete.png" alt="Delete" /></div></li>
                        )
                    })
                    : <div className="text-center w-100">No Contents</div>
                }
            </ul>
        </div>
    )
}