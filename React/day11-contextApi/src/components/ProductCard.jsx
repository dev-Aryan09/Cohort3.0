import React from "react";

const ProductCard = ({ product, setCartItems }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border-3 border-white">
      {/* Image */}
      <div className="h-40 p-4 bg-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-blue-600 font-medium uppercase">
          {product.category}
        </p>

        <h2 className="mt-1 text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>

          <span className="text-xs text-yellow-500">
            ⭐ {product.rating.rate}
          </span>
        </div>

        <button
          onClick={() => {
            setCartItems((prev) => [...prev, product]);
          }}
          className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
