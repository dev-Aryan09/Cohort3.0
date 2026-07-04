import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [flag, setFlag] = useState(true);
  console.log(flag);

  console.log(count);
  // let count = 10;

  // This won't work in React because React deals with virtual DOM
  /*
  const btn = document.querySelector("#id");
  console.log(btn)
  btn.addEventListener("click", ()=>{
    count++
    console.log(count);
  })
  */

  return (
    <div>
      <h1>Count is - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          setFlag(false);
        }}
      >
        Change boolean
      </button>
    </div>
  );
};

export default App;
