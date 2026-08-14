import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          color: "black",
          textDecoration: "none",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
