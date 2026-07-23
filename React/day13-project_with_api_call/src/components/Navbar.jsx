import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);
  return (
    <div className="flex justify-between p-4 rounded text-xl bg-slate-600 text-white">
      <div className="cursor-pointer">logo</div>
      <ul className="flex gap-10">
        <li onClick={() => setToggle(true)} className="cursor-pointer">
          Home
        </li>
        <li onClick={() => setToggle(false)} className="cursor-pointer">
          Cart
        </li>
      </ul>
      <button className="cursor-pointer">Login</button>
    </div>
  );
};

export default Navbar;
