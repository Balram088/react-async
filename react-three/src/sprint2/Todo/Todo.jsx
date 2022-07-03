import { useState } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./Todolist";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  //for add todo
  const handleAdd = (text, handleClear) => {
    setTodos([
      ...todos,
      {
        id: todos.length + Date.now(),
        title: text,
        status: false,
      },
    ]);
    handleClear(text);
  };
  //for complete unComplete
  const handleToggle = (id) => {
    const upDatetodo = todos.map((item) =>
      item.id === id
        ? {
            ...item,

            status: !item.status,
          }
        : item
    );
    setTodos(upDatetodo);
  };
  //for delete todo
  const handleDelet = (id) => {
    const upDatetodo = todos.filter((item) => item.id !== id);
    setTodos(upDatetodo);
  };

  console.log(todos);
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: "70%",
        height: "1000px",
        marginLeft: "15%",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>TODO</h1>
      <AddTodo handleAdd={handleAdd} />
      {/* <Todolist
        todos={todos}
        handleToggle={handleToggle}
        handleDelet={handleDelet}
      /> */}
      <div>
        <Todolist
          todos={todos.filter((item) => !item.status)}
          handleToggle={handleToggle}
          handleDelet={handleDelet}
        />
      </div>

      <h1>Complete</h1>
      <div>
        <Todolist
          todos={todos.filter((item) => item.status)}
          handleToggle={handleToggle}
          handleDelet={handleDelet}
        />
      </div>
    </div>
  );
}
