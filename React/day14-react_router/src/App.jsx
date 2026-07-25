import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="h-screen p-2">
      <nav className="flex justify-between border p-2">
        <h1>Logo</h1>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Enterprise</li>
          <li>Shopping</li>
        </ul>
        <button>Login</button>
      </nav>

      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
