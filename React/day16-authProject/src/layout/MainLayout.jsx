import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  console.log("main layout rendering...", performance.now());
  return (
    <div className="h-screen p-2 grid grid-cols-[1fr_7fr]">
      <Navbar />

      <div className="p-2 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
