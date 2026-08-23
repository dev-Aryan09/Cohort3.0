import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AudioPlayer from "../components/AudioPlayer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      {/* MAIN APP AREA */}
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_260px]">
        {/* LEFT - PAGE CONTENT */}
        <main className="min-w-0 pb-52 pt-16 md:pb-28 lg:pt-0">
          <Outlet />
        </main>

        {/* RIGHT - NAVIGATION */}
        <Navbar />
      </div>

      {/* BOTTOM */}
      <Footer />

      <AudioPlayer />
    </div>
  );
};

export default MainLayout;
