import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes, NavLink } from "react-router";

const App = () => {
  return (
    <div className="h-screen p-2">
      <nav className="flex justify-between border p-2">
        <h1>Logo</h1>
        <ul className="flex gap-4 cursor-pointer">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>
        <button>Login</button>
      </nav>

      {/* Routes is the parent, and
      Route(s) are children
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
