import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import CartDrawer from "../components/cart/CartDrawer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default MainLayout;
