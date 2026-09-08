import { Star, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    category: "Tea Sachets",
    rating: "4.72 (85)",
    bg: "#CFF59A",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/organic_tropical_green_tea_sachet_featured.webp?v=1771579242&width=300.0",
    title: "Organic Tropical Green Tea",
    price: "From $11.95",
    description:
      "Our Organic Tropical Green is a fruity and fun take on a classic green tea.",
  },

  {
    category: "Matcha",
    rating: "4 (1)",
    bg: "#D9F3A3",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/matcha-tin_featured.webp?v=1771589563&width=300.0",
    title: "Organic Ceremonial Matcha - 1oz Tin",
    price: "From $23.95",
    description:
      "Our Ceremonial Matcha is organic and ceremonial-grade Japanese matcha.",
  },

  {
    category: "Naked Sachets",
    rating: "5 (12)",
    bg: "#B8EFD9",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/peppermint_naked_featured.webp?v=1771580547&width=600.0",
    title: "Organic Peppermint - 50 Naked Tea Sachets",
    price: "$21.95",
    description:
      "Our organic Peppermint tea is made from peppermint grown in Washington State.",
  },

  {
    category: "Naked Sachets",
    rating: "4.57 (42)",
    bg: "#CFE0F7",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Naked_Tea.webp?v=1771401766&width=300.0",
    title: "Organic Earl Grey - 50 Naked Tea Sachets",
    price: "$21.95",
    description: "Earl Grey's distinctive aroma comes from bergamot citrus.",
  },
  {
    category: "GIFTS & SAMPLERS",
    rating: "5 (2)",
    bg: "#FDE6A2",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/bundle-herbal-tea-trio-featured-image.webp?v=1772174356&width=300.0",
    title: "Herbal Tea Trio",
    price: "$33.30",
    description: "A trio of soothing herbal teas.",
  },
  {
    category: "GIFTS & SAMPLERS",
    rating: "4.85 (41)",
    bg: "#CFE0F7",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Bamboo_Tea_Chest.webp?v=1772543139&width=600",
    title: "Classic Bamboo Tea Chest",
    price: "$42.95",
    description:
      "This 6-slot bamboo box offers a sampling of eight sachets each of six of our best selling teas.",
  },
  {
    category: "LATTE MIX",
    rating: "4.3 (23)",
    bg: "#D6F5C2",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Latte_Mix_b400f40c-730f-4122-9058-cfc4e5bf8faf.webp?v=1771389945&width=288",
    title: "Nice Matcha Tea Latte Mix",
    price: "From $12.95",
    description:
      "Our Nice Matcha is a lightly sweetened powdered mix meant for making tea lattes simple.",
  },
  {
    category: "LATTE MIX",
    rating: "4.28 (18)",
    bg: "#FAD4B0",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/organic_high_mountain_chai_tea_sachet_featured.webp?v=1771578289&width=600",
    title: "Nice Chai Tea Latte Mix",
    price: "From $12.95",
    description:
      "Our Nice Chai is a not too sweet, not too spicy, powdered latte mix meant for making tea lattes simple.",
  },
];

const ProductCard = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={25}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Cart product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Cart = ({ product }) => {
  return (
    <div>
      {/* Image Card */}
      <div
        className="relative rounded-2xl border border-black overflow-hidden h-105 p-5"
        style={{ backgroundColor: product.bg }}
      >
        {/* Category */}
        <span className="absolute top-4 left-4 bg-white border border-black rounded-lg px-3 py-2 text-sm font-bold uppercase">
          {product.category}
        </span>

        {/* Rating */}
        <div className="absolute top-5 right-5 flex items-center gap-1 text-sm">
          <Star size={16} fill="black" />
          <span>{product.rating}</span>
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center h-full">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-65 object-contain"
          />
        </div>

        {/* Add Button */}
        <button className=" absolute bottom-4 right-4 w-13 h-13 cursor-pointer  bg-white border border-black rounded-xl flex flex-col items-center justify-center hover:bg-black hover:text-white transition">
          <Plus size={20} />
          <span className="text-sm">Add</span>
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="font-serif text-[20px] line-clamp-1 leading-8">
          {product.title}
        </h3>

        <p className="font-semibold mt-3">{product.price}</p>

        <p className="text-gray-600 mt-3 line-clamp-2 leading-7">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
