import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import InsideHome from "../pages/InsideHome";
import InsideAbout from "../pages/InsideAbout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="inside-home" element={<InsideHome />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="info-ceo" element={<InsideAbout />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
