import React, { useContext } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  return (
    <div className="flex justify-between py-4 px-12 rounded text-xl bg-slate-600 text-white">
      <div className="cursor-pointer">logo</div>
      <ul className="flex gap-10">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Cart</li>
      </ul>
      <button
        onClick={handleLogout}
        className="border p-1 bg-red-500 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
