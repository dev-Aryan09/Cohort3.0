import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    tag: "NICE",
    title: "Chai Latte Mix",
    description:
      "Our Nice Chai is a not too sweet, not too spicy, powdered latte mix meant for making tea lattes simple.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Nice_Chai.webp?v=1773826534&width=720",
  },
  {
    id: 2,
    tag: "MATCHA",
    title: "Matcha Latte",
    description:
      "Premium ceremonial matcha blended perfectly for cafés and home baristas.",
    image:
      "//www.twoleavestea.com/cdn/shop/files/Nice_Matcha.webp?v=1773826579&width=720",
  },
  {
    id: 3,
    tag: "MOCHA",
    title: "Mocha Latte",
    description:
      "Rich chocolate with smooth espresso notes for delicious café drinks.",
    image:
      "//www.twoleavestea.com/cdn/shop/files/Two_Roots.webp?v=1773826580&width=720",
  },
];

const ProductSlider = () => {
  return (
    <section className="bg-[#9b6327]  sm:px-0 p-2  py-20 relative overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        speed={1500}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="max-w-[1850px] mx-auto">
              <div className="bg-[#FFD1A1] rounded-3xl border border-black overflow-hidden relative">
                {/* Left Arrow */}

                <button className="prev-btn   absolute left-10 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white border border-black hidden sm:flex items-center justify-center hover:bg-black hover:text-white duration-300">
                  <ChevronLeft size={34} />
                </button>

                {/* Right Arrow */}

                <button className="next-btn absolute right-10 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white border border-black hidden sm:flex items-center justify-center hover:bg-black hover:text-white duration-300">
                  <ChevronRight size={34} />
                </button>

                {/* desktop*/}
                <div className=" hidden md:grid lg:grid-cols-2 items-center min-h-157.5">
                  {/* Image */}

                  <div className="flex items-center justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-137.5 object-contain"
                    />
                  </div>

                  {/* Content */}

                  <div className="px-10 lg:px-20">
                    <span className="inline-block bg-[#F6A55C] border border-black rounded-lg px-4 py-1 -rotate-2 text-5xl font-black">
                      {item.tag}
                    </span>

                    <h2 className="font-serif text-[80px] leading-none mt-8">
                      {item.title}
                    </h2>

                    <p className="text-2xl mt-8 max-w-xl">{item.description}</p>

                    <button className="mt-10 border border-black bg-white rounded-full px-16 py-5 text-3xl hover:bg-black hover:text-white duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* mobile */}

                <div className="    md:hidden lg:grid-cols-2 items-center min-h-157.5">
                  {/* Image */}

                  <div className="flex  items-center justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-137.5 object-contain"
                    />
                  </div>

                  {/* Content */}

                  <div className="px-10 lg:px-20">
                    <span className="inline-block bg-[#F6A55C] border border-black rounded-lg px-4 py-1 -rotate-2 text-2xl font-black">
                      {item.tag}
                    </span>

                    <h2 className="font-serif text-[40px] leading-none mt-8">
                      {item.title}
                    </h2>

                    <p className="text-xl my-4  max-w-xl">{item.description}</p>

                    <button className="  border border-black bg-white rounded-lg cursor-pointer px-8 py-2 text-3xl hover:bg-black hover:text-white duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default ProductSlider;
