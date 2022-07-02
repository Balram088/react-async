import { useState } from "react";

export default function Addtodo({ handleAdd }) {
  const [text, setText] = useState("");
  const handleClear = () => {
    setText("");
  };

  return (
    <div>
      <input
        className="inputs"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Your New Task"
      />

      <button
      className="buttons"
         onClick={() => {
          handleAdd(text, handleClear);
        }}
      >
        Add New
      </button>
    </div>
  );
}
