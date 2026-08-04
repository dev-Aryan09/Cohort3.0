import React from "react";

const ProductsLoader = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center">
        {/* Floating Emoji */}
        <div className="animate-bounce text-7xl">📦</div>

        {/* Loading Text */}
        <h2 className="mt-6 text-2xl font-bold text-white">
          Fetching awesome stuff...
        </h2>

        <p className="mt-2 text-center text-gray-400">
          Hang tight! Your data is on the way.
        </p>

        {/* Progress */}
        <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full w-1/3 animate-[loading_1.5s_infinite] rounded-full bg-lime-400"></div>
        </div>
      </div>

      <style>
        {`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(320%);
          }
        }
      `}
      </style>
    </div>
  );
};

export default ProductsLoader;
