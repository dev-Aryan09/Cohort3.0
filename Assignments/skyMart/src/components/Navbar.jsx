import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Zap, Menu, X } from "lucide-react";
import { toast } from "react-toastify";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const {
    setLoggedInUser,
    cartOpen,
    setCartOpen,
    totalCartQuantity,
    loggedInUser,
  } = useContext(MyStore);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);

    toast.success("Logout Successful!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });

    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Set initial scroll state
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed pt-1 top-0 left-0 right-0 z-50 bg-[#0d0d0d] backdrop-blur-xl transition-all duration-300
                   ${isScrolled ? "border-b border-white" : "border-b border-transparent"}
                   ${cartOpen ? "opacity-0 invisible" : "opacity-100 visible"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-400">
            <Zap className="h-4 w-4 fill-black text-black" />
          </div>

          <h1 className="text-lg font-semibold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </NavLink>

        {/* Navigation */}
        <ul className="hidden md:flex gap-4 font-semibold text-sm">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-400" : "text-neutral-400 hover:text-white"
            }
            to="/main"
            end
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-400" : "text-neutral-400 hover:text-white"
            }
            to="/main/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-400" : "text-neutral-400 hover:text-white"
            }
            to="/main/about"
          >
            About
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <h1
            title={loggedInUser.email}
            className="flex items-center gap-2 rounded-xl border border-neutral-700 px-3 py-2 bg-neutral-800/70"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-lime-400 text-xs font-bold text-black">
              {loggedInUser.fullName.charAt(0).toUpperCase()}
            </span>
            <span className="font-semibold text-neutral-400 text-sm">
              {loggedInUser.fullName}
            </span>
          </h1>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-xl border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:bg-white/10 cursor-pointer"
            title="Go to cart"
          >
            <ShoppingCart className="h-5 w-5 text-white" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              {totalCartQuantity}
            </span>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400 cursor-pointer"
            title="logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* mobile responsive navbar */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-xl border border-white/10 bg-white/5 p-2"
          >
            <ShoppingCart className="h-5 w-5 text-white" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              {totalCartQuantity}
            </span>
          </button>

          {/* Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-2"
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-white cursor-pointer" />
            ) : (
              <span title="Open menu">
                <Menu className="h-5 w-5 text-white cursor-pointer" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Overlay right-side drawer */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-72 border-l border-white/10 bg-[#111111] transition-transform duration-300 md:hidden
                    ${menuOpen ? "translate-x-0 " : "translate-x-full pointer-events-none"}`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4.5">
          <h2 className="text-lg font-semibold text-white">Menu</h2>

          <button onClick={() => setMenuOpen(false)}>
            <span title="Close menu">
              <X className="h-6 w-6 text-white cursor-pointer" />
            </span>
          </button>
        </div>

        <div className="flex flex-col p-4">
          <NavLink
            to="/main"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-3 text-lime-400 hover:bg-white/5 rounded-xl"
                : "block px-4 py-3 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-3 text-lime-400 hover:bg-white/5 rounded-xl"
                : "block px-4 py-3 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-3 text-lime-400 hover:bg-white/5 rounded-xl"
                : "block px-4 py-3 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl"
            }
          >
            About
          </NavLink>

          <div className="my-5 border-t border-white/10" />

          <h1
            title={loggedInUser.email}
            className="flex items-center gap-3 rounded-xl border border-[#656363] bg-[#242424] px-3 py-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 font-semibold text-black">
              {loggedInUser.fullName.charAt(0).toUpperCase()}
            </span>

            <span className="font-semibold text-white">
              {loggedInUser.fullName}
            </span>
          </h1>

          <button
            onClick={handleLogout}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-neutral-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400 cursor-pointer"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
