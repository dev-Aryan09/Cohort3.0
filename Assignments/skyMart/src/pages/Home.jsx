import React, { useContext } from "react";
import { Star, Zap } from "lucide-react";
import HeroSection from "../components/home/HeroSection";
import HeroStats from "../components/home/HeroStats";
import CategorySection from "../components/home/CategorySection";
import ProductListSection from "../components/home/ProductListSection";
import { MyStore } from "../context/MyContext";
import Benefits from "../components/home/Benefits";

const Home = () => {
  const { productsData } = useContext(MyStore);
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <HeroSection />

      <HeroStats />

      <CategorySection />

      <div className="grid gap-8 lg:grid-cols-2">
        <ProductListSection
          title="Top Rated"
          icon={<Star size={18} className="fill-yellow-400 text-yellow-400" />}
          products={productsData}
        />

        <ProductListSection
          title="New Arrivals"
          icon={<Zap size={18} className="fill-lime-400 text-lime-400" />}
          products={productsData}
        />
      </div>

      <Benefits />
    </main>
  );
};

export default Home;
