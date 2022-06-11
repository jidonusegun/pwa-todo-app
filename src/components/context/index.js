import React, { useState, createContext} from 'react';

export const TodoContext = createContext(null);

const list = [{item: "make bed", date: "2022-06-10T15:04"}, {item: "make tea", date: "2022-06-10T21:23"}]

export default function Context({children}) {
    const [todos, setTodos] = useState(list);

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}