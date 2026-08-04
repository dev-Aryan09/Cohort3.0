import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-neutral-100 shadow-sm rounded-lg p-5 mx-auto border border-gray-400">
      {/* Product Image */}
      <div className="flex justify-center mb-4 p-2 bg-gray-200 rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

      {/* Product Info */}
      <h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
        {product.title}
      </h2>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <p className="text-gray-800 font-semibold mb-2">${product.price}</p>
      <p className="text-gray-500 text-xs">Category: {product.category}</p>

      {/* Rating */}
      <div className="mt-3 text-sm text-gray-600">
        ⭐ {product.rating.rate} ({product.rating.count})
      </div>

      {/* Action */}
      <div className="mt-5 flex justify-end">
        <button className="px-3 py-1 bg-white border-2 border-blue-400 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
