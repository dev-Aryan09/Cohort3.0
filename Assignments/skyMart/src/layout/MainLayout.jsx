import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import CartDrawer from "../components/cart/CartDrawer";

const MainLayout = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </div>
  );
};

export default MainLayout;
