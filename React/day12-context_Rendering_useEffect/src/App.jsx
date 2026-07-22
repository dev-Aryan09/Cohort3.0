import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import { useContext } from "react";
import { MyStore } from "./context/MyContext";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [apiData, setApiData] = useState([]);

  // runs after component renders
  // useEffect(() => {
  //   console.log("App rendering...", performance.now());
  // }, [toggle]);

  const getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setApiData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <br />
      <button onClick={() => setToggle((prev) => !prev)}>
        change toggle state
      </button>
      {/* <Home /> */}
      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
