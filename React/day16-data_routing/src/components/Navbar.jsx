import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-around border p-2">
      <h1>Logo</h1>
      <ul className="flex gap-4 cursor-pointer">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
      </ul>
      <button
        onClick={() => navigate("/auth/login")}
        className="cursor-pointer"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
