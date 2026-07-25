import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="h-screen p-2">
      <Navbar />

      <AppRoutes />
    </div>
  );
};

export default App;
