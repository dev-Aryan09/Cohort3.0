import React from "react";
import { NavLink } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d0d0d] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400">
            <Zap className="h-5 w-5 fill-black text-black" />
          </div>

          <h1 className="text-xl font-semibold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </NavLink>

        {/* Navigation */}
        <ul className="flex gap-4 font-semibold text-sm">
          <li className="text-neutral-400 hover:text-white">
            <NavLink>Home</NavLink>
          </li>
          <li className="text-neutral-400 hover:text-white">
            <NavLink>Shop</NavLink>
          </li>
          <li className="text-neutral-400 hover:text-white">
            <NavLink>About</NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-xl border border-[#656363] px-3 py-1 bg-[#242424]">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-lime-400 font-semibold text-black">
              A
            </span>
            <span className="font-semibold text-white text-sm">
              Aryan Saini
            </span>
          </button>

          {/* Cart */}
          <button className="relative rounded-xl border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:bg-white/10 cursor-pointer">
            <ShoppingCart className="h-5 w-5 text-white" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              2
            </span>
          </button>

          {/* Logout */}
          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400 cursor-pointer">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
