import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = ({ product }) => {
  // useParams() is used to extract dynamic route parameters from a URL
  const { id } = useParams();

  const [singleProductData, setSingleProductData] = useState({});
  console.log(singleProductData);

  const getSingleProductData = async () => {
    try {
      // fetching data of single individual product
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Detail api error", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-4 px-5">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-slate-50 rounded-xl flex justify-center items-center p-8">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="h-96 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Info */}
          <div>
            {/* Category */}
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full uppercase">
              {singleProductData.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-800 mt-4">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500 text-lg">⭐</span>

              <span className="font-semibold">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="text-4xl font-bold text-green-600">
                ${singleProductData.price}
              </span>

              <span className="ml-3 text-gray-400 line-through">$149.99</span>

              <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                27% OFF
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-7">
              {singleProductData.description}
            </p>

            {/* Static Features */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-3">Highlights</h3>

              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Premium quality material</li>
                <li>Lightweight & durable</li>
                <li>Water-resistant finish</li>
                <li>1 Year Manufacturer Warranty</li>
                <li>Suitable for everyday use</li>
              </ul>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-8">
              <span className="font-semibold">Quantity</span>

              <div className="flex border rounded-lg overflow-hidden">
                <button className="px-4 py-2 hover:bg-slate-100">-</button>

                <span className="px-6 py-2">{singleProductData?.quantity}</span>

                <button className="px-4 py-2 hover:bg-slate-100">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Add to Cart
              </button>

              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Extra Information */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-50 rounded-lg p-5">
            <h3 className="font-semibold mb-2">🚚 Free Delivery</h3>

            <p className="text-gray-600 text-sm">
              Free shipping on orders above $50. Estimated delivery in 3–5
              business days.
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-5">
            <h3 className="font-semibold mb-2">🔄 Easy Returns</h3>

            <p className="text-gray-600 text-sm">
              Return within 30 days if the product is unused and in original
              packaging.
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-5">
            <h3 className="font-semibold mb-2">🔒 Secure Payment</h3>

            <p className="text-gray-600 text-sm">
              We support all major cards, UPI, Net Banking, and Cash on
              Delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
