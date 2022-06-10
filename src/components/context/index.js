import React, { useState, createContext} from 'react';

export const TodoContext = createContext(null);

export default function Context({children}) {
    const [todos, setTodos] = useState([]);

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}