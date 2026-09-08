import React from "react";
import TopHeader from "./components/TopHeader";
import Home from "./pages/Home/Home";
import BottomHeader from "./components/BottomHeader";
import Background from "./components/Background";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <TopHeader />

      <BottomHeader />

      <Home />

      <Footer />
    </div>
  );
};

export default App;
