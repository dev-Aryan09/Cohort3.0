import React from "react";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav className="p-3 rounded flex justify-between items-center bg-[#ad0c37] text-white">
      <div>
        <img
          className="rounded-full cursor-pointer"
          width={45}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGgepMJkqxpPR21un-cZi1xj8YK_oWsen30wzfAhtf9WH5ZZxXVnFCBA&s=10"
          alt="logo"
        />
      </div>
      <ul className="flex gap-8 font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="rounded px-3 py-2 bg-[#E68457] cursor-pointer"
      >
        {toggle ? "Create User" : "All Users"}
      </button>
    </nav>
  );
};

export default Navbar;
