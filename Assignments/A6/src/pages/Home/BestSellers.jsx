import React from "react";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  return (
    <div>
      <section className="bg-[#F7F4E7] py-20 lg:py-30">
        <div className="max-w-300 mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="font-serif text-[#221D1B] text-[25px] sm:text-[30px] md:text-[60px] lg:text-[70px] leading-tight font-light">
            A <span className="italic">great</span> cup starts with a careful
            <br />
            pluck - the top two leaves and a bud.
          </h2>

          {/* Button */}
          <div className="md:mt-24 mt-10 ">
            <button className="bg-[#D6A9E6] border border-[#6A4B77] rounded-lg px-8 py-3 text-[22px] md:text-[34px] font-black uppercase tracking-wide text-[#221D1B] -rotate-2 transition duration-300 hover:rotate-0 hover:scale-105">
              Best Sellers
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5E8] py-16 pt-0 border-b-2 border-black ">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"></div>

          <ProductCard />

          {/* Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-[#2F2C63] transition-all duration-300 hover:border border hover:text-[#2F2C63] border-[#2F2C63] hover:bg-white text-white px-14 py-3 cursor-pointer  rounded-full text-xl">
              Explore All Teas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellers;
