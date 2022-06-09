import React, {useState, useContext} from 'react';
import { TodoContext } from '../context';

export default function Form() {
    const {setTodos, todos} = useContext(TodoContext)
    const [inputField, setInputField] = useState('')

    const handleSubmit = () => {
        setTodos([...todos, inputField]);
        setInputField('')
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div className="formContainer">
            <input type="text" name="todo" placeholder="Enter your item here..." onChange={(e) => setInputField(e.target.value)} onKeyPress={(e) => onKeyPress(e)} value={inputField} />
            <button onClick={() => handleSubmit()}>Add</button>
        </div>
    )
}