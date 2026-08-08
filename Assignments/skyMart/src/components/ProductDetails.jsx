import React, { useContext } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { MyStore } from "../context/MyContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { productsData, handleAddToCart, cartItems } = useContext(MyStore);

  // Convert URL id from string to number
  const productId = Number(id);

  // Find current product
  const currentIndex = productsData.findIndex(
    (product) => product.id === productId,
  );
  // single product object
  const product = productsData[currentIndex];

  // Navigation states
  const isFirstProduct = currentIndex === 0;
  const isLastProduct = currentIndex === productsData.length - 1;

  // Navigate to previous product
  const handlePrevious = () => {
    if (!isFirstProduct) {
      const previousProduct = productsData[currentIndex - 1];

      navigate(`/main/products/${previousProduct.id}`);
    }
  };

  // Navigate to next product
  const handleNext = () => {
    if (!isLastProduct) {
      const nextProduct = productsData[currentIndex + 1];

      navigate(`/main/products/${nextProduct.id}`);
    }
  };

  // product already in the cart
  const isInCart = cartItems.find((item) => {
    return item.id === productId;
  });

  // Loading / invalid product
  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#0d0d0d] px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Product not found</h2>

          <button
            onClick={() => navigate("/main/shop")}
            className="mt-5 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 py-8 text-white sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <button
            onClick={() => navigate("/main/shop")}
            className="text-neutral-500 transition hover:text-white"
          >
            ← Products
          </button>

          <span className="text-neutral-700">/</span>

          <span className="text-neutral-400 capitalize">
            {product.category}
          </span>

          <span className="text-neutral-700">/</span>

          <span className="max-w-50 truncate text-neutral-200 sm:max-w-none">
            {product.title}
          </span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* ================================= */}
          {/* LEFT - PRODUCT IMAGE */}
          {/* ================================= */}

          <div className="flex min-h-100 items-center justify-center rounded-3xl bg-white p-8 sm:p-0 sm:min-h-12  lg:min-h-137.5">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 w-full max-w-100 object-contain"
            />
          </div>

          {/* ================================= */}
          {/* RIGHT - PRODUCT INFORMATION */}
          {/* ================================= */}

          <div className="flex flex-col justify-center">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-medium capitalize text-lime-400">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const filled = index < Math.round(product.rating.rate);

                  return (
                    <Star
                      key={index}
                      size={17}
                      className={
                        filled
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-neutral-600"
                      }
                    />
                  );
                })}
              </div>

              <span className="font-medium text-neutral-300">
                {product.rating.rate}
              </span>

              <span className="text-neutral-600">
                ({product.rating.count} reviews)
              </span>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-white" />

            {/* Price */}
            <div>
              <span className="text-3xl font-black text-lime-400 sm:text-4xl">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-white" />

            {/* Description */}
            <p className="text-sm leading-6 text-neutral-500 sm:text-base">
              {product.description}
            </p>

            {/* Add to Cart */}
            <div className="mt-6 flex gap-3">
              {!isInCart ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-lime-400 px-5 py-4 font-semibold text-black transition duration-200 hover:bg-lime-300 active:scale-[0.98] cursor-pointer"
                >
                  <ShoppingCart size={19} />
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl  border border-green bg-green-500/20 px-5 py-4 font-semibold text-green-400 transition duration-200 active:scale-[0.98] cursor-pointer"
                  disabled
                >
                  <CircleCheckBig size={19} />
                  Added to cart
                </button>
              )}

              {/* Wishlist */}
              <button
                className="flex h-13.5 w-13.5 hrink-0 items-center justify-center rounded-2xl border border-neutral-700 text-neutral-400 transition hover:border-lime-400 hover:text-lime-400"
                aria-label="Add to wishlist"
              >
                <Heart size={21} />
              </button>
            </div>

            {/* ================================= */}
            {/* FEATURES */}
            {/* ================================= */}

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Free Delivery */}
              <div className="flex flex-col items-center rounded-2xl border border-white px-3 py-4 text-center">
                <Truck size={18} className="mb-2 text-lime-400" />

                <p className="text-xs font-medium text-white">Free Delivery</p>

                <p className="mt-1 text-[10px] text-neutral-600">
                  On orders $50+
                </p>
              </div>

              {/* Secure Payment */}
              <div className="flex flex-col items-center rounded-2xl border border-white px-3 py-4 text-center">
                <ShieldCheck size={18} className="mb-2 text-lime-400" />

                <p className="text-xs font-medium text-white">Secure Pay</p>

                <p className="mt-1 text-[10px] text-neutral-600">256-bit SSL</p>
              </div>

              {/* Returns */}
              <div className="flex flex-col items-center rounded-2xl border border-white px-3 py-4 text-center">
                <RotateCcw size={18} className="mb-2 text-lime-400" />

                <p className="text-xs font-medium text-white">Easy Returns</p>

                <p className="mt-1 text-[10px] text-neutral-600">
                  30-day policy
                </p>
              </div>
            </div>

            {/* ================================= */}
            {/* PREVIOUS / NEXT */}
            {/* ================================= */}

            <div className="mt-8 flex gap-3">
              {/* Previous */}
              {!isFirstProduct && (
                <button
                  onClick={handlePrevious}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-[#202020] py-3 text-sm font-medium text-white transition hover:bg-[#292929] cursor-pointer"
                >
                  <ChevronLeft size={17} />
                  Previous
                </button>
              )}

              {/* Next */}
              {!isLastProduct && (
                <button
                  onClick={handleNext}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime-400 py-3 text-sm font-medium text-black transition hover:bg-lime-300 cursor-pointer"
                >
                  Next
                  <ChevronRight size={17} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* PRODUCT DETAILS */}
        {/* ================================= */}

        <div className="mt-16 border-t border-neutral-800 pt-10">
          <h2 className="text-2xl font-bold">Product Details</h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-[#151515] p-5">
              <p className="text-xs text-neutral-500">Product ID</p>

              <p className="mt-2 font-semibold text-white">#{product.id}</p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-[#151515] p-5">
              <p className="text-xs text-neutral-500">Category</p>

              <p className="mt-2 font-semibold capitalize text-white">
                {product.category}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-[#151515] p-5">
              <p className="text-xs text-neutral-500">Customer Rating</p>

              <p className="mt-2 font-semibold text-white">
                {product.rating.rate} / 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
