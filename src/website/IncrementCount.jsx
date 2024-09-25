import React, { useState, useEffect } from "react";

const IncrementCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
    if (count === 0) alert("decrement not allowed");
  };

  useEffect(() => {
    document.title = count;
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default IncrementCount;
