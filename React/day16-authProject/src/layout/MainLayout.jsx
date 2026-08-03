import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  console.log("main layout rendering...", performance.now());
  return (
    <div className="p-2">
      <Navbar />
      <h1>Main Layout</h1>
    </div>
  );
};

export default MainLayout;
