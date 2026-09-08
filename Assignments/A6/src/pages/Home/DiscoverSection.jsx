import React from "react";

const tags = [
  "A Sweet Treat",
  "Evening Unwind",
  "Focused & Clear",
  "Caffeine!",
  "Caffeine-Free",
  "Ceremony-Worthy",
  "Whole Leaf",
  "Over Ice",
  "Lattes",
  "Black Tea",
  "Green Tea",
  "Herbal Tea",
  "Organic",
  "Barista Favorite",
  "Calm & Cozy",
  "Fruit Forward",
];

const DiscoverSection = () => {
  return (
    <section className="bg-[#F8F5E8] py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <span className="inline-block bg-[#F57C2C] border-2 border-black rounded-md px-4 py-1 text-2xl font-extrabold uppercase -rotate-2">
          Discover
        </span>

        {/* Heading */}
        <h2 className="mt-6 font-serif text-[40px]  md:text-[50px] leading-tight text-[#231f20db]">
          Let's find a cup that fits the <span className="italic">moment.</span>
          <br />
          What are you searching for?
        </h2>

        {/* Search */}
        <div className="mt-12">
          <input
            type="text"
            placeholder="iced tea"
            className="w-full max-w-105 focus:max-w-full transition-all duration-500 py-3  px-8 text-3xl font-serif placeholder:text-gray-400 bg-transparent border border-black rounded-xl outline-none"
          />
        </div>

        {/* Small Text */}
        <p className="mt-15 text-xs uppercase tracking-wide text-gray-700">
          OR EXPLORE BY VIBE...
        </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="px-5 py-2 cursor-pointer rounded-lg border border-[#2B2B2B] bg-[#DCE9FB] font-serif font-medium text-[22px] hover:bg-[#c8dbf7] transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
