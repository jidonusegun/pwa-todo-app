import React, { useState, createContext} from 'react';

export const TodoContext = createContext(null);

const list = ['buy milk', 'buy bread','do lundry', 'Tutorial'];

export default function Context({children}) {
    const [todos, setTodos] = useState(list);

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}