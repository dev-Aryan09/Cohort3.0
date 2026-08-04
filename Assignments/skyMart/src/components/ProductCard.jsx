import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-60 mx-auto overflow-hidden rounded-[30px] bg-[#0d0d0d] shadow-xl transition duration-300 hover:shadow-2xl hover:shadow-lime-400/30 border border-neutral-700 hover:border-lime-400">
      {/* Image Section */}
      <div className="relative flex h-40 items-center justify-center  bg-[#f4f4f4] sm:h-44 md:h-52">
        <span className="absolute left-4 top-4 rounded-full bg-gray-600 px-2.5 py-0.5 text-xs text-white capitalize">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-[60%] w-[60%] object-contain transition duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-white sm:p-5">
        <p className="text-xs text-neutral-500 capitalize font-semibold">
          {product.category}
        </p>

        <h2 className="mt-2 min-h-13 text-lg font-semibold leading-6 line-clamp-2 sm:text-sm">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-1 text-xs text-neutral-400">
            ({product.rating.count})
          </span>
        </div>

        <div className="my-4 border-t border-white"></div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-black text-lime-400">
            $<span className="">{product.price}</span>
          </h3>

          <button className="flex shrink-0 items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-lime-300 ">
            <ShoppingCart size={14} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
