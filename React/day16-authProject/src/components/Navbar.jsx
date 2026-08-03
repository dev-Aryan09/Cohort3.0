import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-between rounded text-xl border-r-2 px-1">
      <div className="cursor-pointer">logo</div>
      <ul className="flex flex-col gap-4 text-center text-lg">
        <NavLink
          to="/main"
          className={({ isActive }) => {
            return isActive
              ? "text-red-500 font-semibold italic cursor-pointer"
              : "cursor-pointer";
          }}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/main/users"
          className={({ isActive }) => {
            return isActive
              ? "text-red-500 font-semibold italic cursor-pointer"
              : "cursor-pointer";
          }}
        >
          Users
        </NavLink>
        <NavLink
          to="/main/products"
          className={({ isActive }) => {
            return isActive
              ? "text-red-500 font-semibold italic cursor-pointer"
              : "cursor-pointer";
          }}
        >
          Products
        </NavLink>
      </ul>
      <button
        onClick={handleLogout}
        className="border p-1 bg-red-500 rounded text-white cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
