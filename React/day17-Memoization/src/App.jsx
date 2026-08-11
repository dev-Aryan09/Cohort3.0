import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

const App = () => {
  console.log("App rendering...", performance.now());

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "Aryan", id: 123 });
  return (
    <div>
      <h1>Memoization</h1>
      <button className="cursor-pointer" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      <button
        className="cursor-pointer"
        onClick={() => setUsers({ ...users, name: "Lucky" })}
      >
        update user
      </button>
      <Home />
      <About users={users} />
    </div>
  );
};

export default App;
