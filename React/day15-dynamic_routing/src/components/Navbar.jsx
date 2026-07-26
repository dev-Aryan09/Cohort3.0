import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between border p-2">
      <h1>Logo</h1>
      <ul className="flex gap-4 cursor-pointer">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
