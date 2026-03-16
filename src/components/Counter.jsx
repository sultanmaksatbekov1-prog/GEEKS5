import React, { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter render");

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Счетчик: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>

      <ChildButton onClick={handleClick} label="Нажми меня" />
    </div>
  );
};

export default Counter;
