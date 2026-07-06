import React, { useState } from "react";

const App = () => {
  console.log("App rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    // object is a reference data type
    name: "Raman",
  });

  console.log(user.name);
  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increment
      </button>
      <button
        onClick={() => {
          // user.name = "Aryan"; // mutate the same object
          setUser({ name: "Aryan" }); // new object -> new reference
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default App;
