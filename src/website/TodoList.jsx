import React, { useState } from "react";

const TodoList = () => {
  const [item, setItem] = useState("");
  const handleTextChange = (event) => {
    setItem(event.target.value);
  };
  console.log("textshow", item);
  return (
    <>
      <input
        type="text"
        placeholder="typeHere"
        value={item}
        onChange={handleTextChange}
      />
    </>
  );
};

export default TodoList;
