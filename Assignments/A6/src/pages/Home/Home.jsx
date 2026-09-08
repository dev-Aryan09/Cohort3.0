import React from "react";
import Hero from "./Hero";
import BestSellers from "./BestSellers";
import DiscoverSection from "./DiscoverSection";
import OurOrigins from "./OurOrigins";
import Testimonials from "./Testimonials";
import CafePartners from "./CafePartners";
import OurLattes from "./OurLattes";
import ProductSlider from "./ProductsSlider";
import Journal from "./Journal";
import JournalSlider from "./JournalSlider";
import AboutSection from "./AboutSection";
import P from "./P";

const Home = () => {
  return (
    <div>
      <Hero />

      <BestSellers />

      <Testimonials />

      <OurOrigins />

      <DiscoverSection />

      <CafePartners />

      <OurLattes />

      <ProductSlider />

      <Journal />
      <JournalSlider />

      <AboutSection />
    </div>
  );
};

export default Home;
