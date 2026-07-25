import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>This is Home Page</h1>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
          toggle ? navigate("/inside-home") : navigate("/");
        }}
      >
        More on Home
      </button>

      <Outlet />
      {/* Whenever the child route changes,
         React renders it inside Outlet */}
    </div>
  );
};

export default Home;
