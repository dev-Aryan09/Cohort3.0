import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <div className="flex flex-col gap-4 pt-16">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
