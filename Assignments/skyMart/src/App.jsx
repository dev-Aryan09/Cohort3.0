import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen bg-[#0d0d0d]">
      <AppRoutes />
    </div>
  );
};

export default App;
