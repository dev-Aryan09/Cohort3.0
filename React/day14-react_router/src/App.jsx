import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  const [toggle, setToggle] = useState("home");
  return (
    <div className="h-screen p-2">
      <nav className="flex justify-between border p-2">
        <h1>Logo</h1>
        <ul className="flex gap-4 cursor-pointer">
          <li onClick={() => setToggle("home")}>Home</li>
          <li onClick={() => setToggle("about")}>About</li>
          <li onClick={() => setToggle("contact")}>Contact</li>
          <li>Services</li>
          <li>Enterprise</li>
          <li>Shopping</li>
        </ul>
        <button>Login</button>
      </nav>

      {toggle === "home" && <Home />}
      {toggle === "about" && <About />}
      {toggle === "contact" && <Contact />}
      {/* if we have 10 or 15 or more pages, then we have to repeat this same method for all of them.
      BUT, it's not the optimized way of doing Routing, instead we will use "react-router"
      */}
    </div>
  );
};

export default App;
