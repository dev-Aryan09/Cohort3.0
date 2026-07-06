import React, { useState } from "react";

const Counter = () => {
  console.log("re-rendering");
  const [count, setCount] = useState(0);
  console.log(count);

  const [name, setName] = useState("Count");
  return (
    <div>
      <h1>
        {name} is {count}
      </h1>
      <button
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
