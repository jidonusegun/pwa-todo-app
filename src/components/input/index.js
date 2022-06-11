import React, { useState, useContext } from "react";
import { TodoContext } from "../context";

export default function Form() {
  const { setTodos, todos } = useContext(TodoContext);
  const [inputType, setInputType] = useState("text")
  const [inputField, setInputField] = useState("");

  const handleChange = (e) => {
    setInputField({...inputField,  [e.target.name]: e.target.value })
};

  const handleSubmit = () => {
    setTodos([...todos, inputField]);
    setInputField({item: "", date: ""});
    setInputType("text")
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="formContainer">
      <input
        type="text"
        name="item"
        placeholder="Enter your task here..."
        onChange={(e) => handleChange(e)}
        value={inputField.item}
      />
 
      <input
        type={inputType}
        name="date"
        placeholder="Enter expiration date and time..."
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => onKeyPress(e)}
        value={inputField.date}
        className="datetime-local"
        onFocus={() => setInputType("datetime-local")}
        onBlur={() => {inputField.date ? setInputType("datetime-local") : setInputType("text")}}
      />
      <button onClick={() => handleSubmit()}>Add</button>
    </div>
  );
}
