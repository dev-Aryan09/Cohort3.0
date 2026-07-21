import React, { useContext } from "react";
import { MyShop } from "../context/MyShopContext";

const Navbar = () => {
  // consuming data via context Api
  let { setIsCartOpen } = useContext(MyShop);
  return (
    <div className="flex justify-between p-4 rounded text-xl bg-slate-600 text-white">
      <div className="cursor-pointer">logo</div>
      <ul className="flex gap-10">
        <li
          onClick={() => {
            setIsCartOpen(false);
          }}
          className="cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={() => {
            setIsCartOpen(true);
          }}
          className="cursor-pointer"
        >
          Cart
        </li>
      </ul>
      <button className="cursor-pointer">Login</button>
    </div>
  );
};

export default Navbar;
