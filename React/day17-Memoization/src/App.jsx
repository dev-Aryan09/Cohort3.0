import React, { useCallback, useMemo } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

const App = () => {
  console.log("App rendering...", performance.now());

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "Aryan", id: 123 });

  //memoize the result(computed value)
  const calculation = useMemo(() => {
    console.log("Calculate running...");
    let sum = 0;

    for (let i = 0; i < 10000000; i++) {
      sum = sum + i;
    }
    return sum;
  }, [count]);

  // memoize function reference
  const greet = useCallback(() => {
    console.log("Hello sheryians coding school...");
  }, [users]);

  return (
    <div>
      <h1>Memoization</h1>
      <h2>User is {users.name}</h2>
      <h2>Calculated value - {calculation}</h2>
      <button className="cursor-pointer" onClick={() => setCount(count + 1)}>
        update count
      </button>
      <br />
      <button
        className="cursor-pointer"
        onClick={() => setUsers({ ...users, name: "Lucky" })}
      >
        update user
      </button>
      <Home />
      <About greet={greet} />
    </div>
  );
};

export default App;
