import { useState } from "react";

export default function FirstTodo() {
  const [text, setText] = useState("");
  const [todos, addTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };
  const handleAdd = () => {
    addTodos([...todos, text]);
    handleClear();
  };

  return (
    <div className="App">
      
    <h1>First Todo</h1>
      <input value={text} type="text" onChange={handleChange}  placeholder="Add Item" />
      <br />
      <button onClick={handleClear} disabled={!text}>Clear Text</button>
      <button onClick={handleAdd} disabled={!text}>Add Item</button>
      <h3>Text:{text}</h3>
      <h4>Total Task-- {todos.length}</h4>
      <ol>
        {todos.map((todo) => (
          <li> {todo} </li>
        ))}
      </ol>
    </div>
  );
}
