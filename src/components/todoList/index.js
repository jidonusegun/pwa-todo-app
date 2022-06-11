import React, { useState, useContext } from 'react';
import Dialog from '../dialog'
import { TodoContext } from '../context';
import CountdownTimer from '../countdown/countdownTimer';

export default function TodoList() {
    const {todos, setTodos} = useContext(TodoContext);
    const [open, setOpen] = useState(false)
    const [activeTodo, setActiveTodo] = useState('')

    const isValidDate = function(date) {
        return new Date(date).getTime() > new Date().getTime()
    }

    const deleteTodo = () => {
        const index = todos.findIndex(todo => todo.item === activeTodo);
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
                            <div key={index} className="list-container">
                             <li>
                                 {todo.item}
                                 <div className="counter-container">
                                     <CountdownTimer targetDate={todo.date} item={todo.item} />
                                 </div>
                                <div className={isValidDate(todo.date) ? "not-expired" : "expired-list"} onClick={() => {setOpen(true); setActiveTodo(todo)}}><img src="/img/delete.png" alt="Delete" /></div>
                             </li>
                            </div>
                        )
                    })
                    : <div className="text-center w-100">No Contents</div> 
                }
            </ul>
        </div>
    )
}