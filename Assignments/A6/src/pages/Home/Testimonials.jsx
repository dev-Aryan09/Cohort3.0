import React from "react";

const testimonials = [
  {
    review: "The right amount of spice.",
    author: "Angelina R.",
    product: "Organic Mountain High Chai",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/organic_high_mountain_chai_tea_sachet_featured.webp?v=1771578289&width=120",
    bg: "#F6AE86",
    bottomBg: "#F06F41",
  },
  {
    review:
      "This drink is incredibly refreshing, especially when served over ice. It’s light, crisp, and instantly cooling, making it perfect for a quick refresh any time of day.",
    author: "Jacob K.",
    product: "Organic Matcha Mint",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/peppermint_naked_featured.webp?v=1771580547&width=120",
    bg: "#AFE16D",
    bottomBg: "#7CCB1F",
  },
  {
    review:
      "One sip and you can feel the difference—clean energy, rich flavor, and all the good stuff your body loves.",
    author: "Harrison G.",
    product: "Two Roots Golden Latte Mix",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Latte_Mix_b400f40c-730f-4122-9058-cfc4e5bf8faf.webp?v=1771389945&width=120",
    bg: "#FFD56D",
    bottomBg: "#FFB400",
  },
  {
    review: "Soo tasty and energizing.",
    author: "Gracie M.",
    product: "Organic Tropical Green Tea",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/organic_tropical_green_tea_sachet_featured.webp?v=1771579242&width=120",
    bg: "#B8EC72",
    bottomBg: "#96D04D",
  },
  {
    review: "The perfect start to my day.",
    author: "Jorge F.",
    product: "Jasmine Petal",
    image:
      "//www.twoleavestea.com/cdn/shop/files/Organic-Mtn-High-Chai-R15-angle_square_KO_1_4.png?v=1770086316&width=144",
    bg: "#D5B9E7",
    bottomBg: "#B884DA",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F8F5E8] py-24">
      <div className="max-w-[1750px] mx-auto px-8">
        <div className="max-w-250 mx-auto ">
          {/* Label */}
          <span className="inline-block bg-[#73bc25] border-2 border-black rounded-md px-2 py-1 text-2xl font-extrabold uppercase -rotate-2">
            Reviews
          </span>
          <h2 className="font-serif lg:text-[60px] md:text-[50px] sm:text-[30px] text-[25px] text-black/70 md:leading-19 max-w-225 mb-16">
            Loved by tea people <span className="italic">everywhere.</span>
            <br />
            Here's what they're saying.
          </h2>
        </div>

        <div className=" grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2   gap-3 ">
          {testimonials.map((item, index) => (
            <TestimonialCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div
      className="rounded-3xl  border border-black overflow-hidden flex flex-col justify-between h-110"
      style={{ backgroundColor: item.bg }}
    >
      {/* Review */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <h3 className="font-serif text-[18px]  text-[#1F1B1A]">
          "{item.review}"
        </h3>

        <p className="mt-8 text-gray-600 text-lg">{item.author}</p>
      </div>

      {/* Bottom Product */}
      <div
        className="m-2 rounded-2xl border border-black grid grid-cols-3   overflow-hidden"
        style={{ backgroundColor: item.bottomBg }}
      >
        <div className="w-20 h-24 border-r border-black flex items-center justify-center bg-white/20">
          <img
            src={item.image}
            alt={item.product}
            className="h-16 object-contain"
          />
        </div>

        <h4 className="pl-1 font-mono uppercase flex justify-center items-center  text-md leading-4">
          {item.product}
        </h4>

        <div className="uppercase flex justify-end   items-center">
          <button className="  bg-white border border-black rounded-full px-3 cursor-pointer py-2 text-2xl group  ">
            <span className=" hover:scale-0 ">Shop</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
