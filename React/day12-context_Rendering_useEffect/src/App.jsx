import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import { useContext } from "react";
import { MyStore } from "./context/MyContext";

const App = () => {
  console.log("App rendering...", performance.now());

  let { count, setCount } = useContext(MyStore);
  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
