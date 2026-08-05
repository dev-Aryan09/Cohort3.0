import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import axios from "axios";
import ProductsLoader from "../components/ProductsLoader";
import ProductCard from "../components/ProductCard";
import { ChevronDown, Search, X } from "lucide-react";
import NoProductsFound from "../components/NoProductsFound";

const Shop = () => {
  const { productsData, setProductsData } = useContext(MyStore);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState("");

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error fetching products...", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setCategory("");
    setFeatured("");
  };

  useEffect(() => {
    getProductsData();
  }, []);

  if (isLoading) return <ProductsLoader />;
  return (
    <div className="px-4 sm:px-12 md:px-24 lg:px-26 xl:px-36 mb-18">
      <div className="py-10 flex flex-col gap-2">
        <h1 className="text-white text-4xl font-semibold ">All Products</h1>
        <p className="text-neutral-500">{productsData.length} products found</p>
      </div>

      {/* filters */}
      <div className="border border-white rounded-2xl mb-2 px-2">
        <div className="sm:flex">
          {/* search bar */}
          <div className="relative w-full max-w-3xl py-4 px-2">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 ml-0.5"
            />

            <input
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              type="text"
              placeholder="Search products..."
              className="w-full rounded-2xl border border-neutral-700 bg-[#1b1b1b] py-2 pl-8 text-white placeholder:text-neutral-500 outline-none transition-all duration-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
            />
          </div>

          {/* category filter */}
          <div className="relative w-full sm:w-64 py-4 px-2">
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category}
              className="w-full appearance-none rounded-2xl border border-neutral-700 bg-[#1b1b1b] px-5 py-2 text-white text outline-none transition-all duration-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 cursor-pointer"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
              <option value="home">Home</option>
              <option value="sports">Sports</option>
              <option value="accessories">Accessories</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 mr-2"
            />
          </div>

          {/* price filter */}
          <div className="relative w-full sm:w-64 py-4 px-2">
            <select
              onChange={(e) => {
                setFeatured(e.target.value);
              }}
              value={featured}
              className="w-full appearance-none rounded-2xl border border-neutral-700 bg-[#1b1b1b] px-5 py-2  text-white outline-none transition-all duration-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="top-rated">Top Rated</option>
              <option value="lowest-rated">Lowest Rated</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 mr-2"
            />
          </div>

          {/* clear button */}
          {(query.trim() || category || featured) && (
            <div className="flex items-center py-4 px-2">
              <button
                onClick={handleClear}
                className="inline-flex h-10 items-center gap-2 rounded-2xl border border-red-900 bg-[#2a1717] px-3 text-red-400 transition-all duration-200 hover:bg-[#351d1d] hover:text-red-300 cursor-pointer"
              >
                <X size={14} strokeWidth={2} />
                <span className="text-sm">Clear</span>
              </button>
            </div>
          )}
        </div>

        {(query.trim() || category || featured) && (
          <div className="-my-1 border-t border-white w-[98%] m-auto " />
        )}

        <div className="flex gap-2 text-lime-400 w-[98%] m-auto">
          {query.trim() && (
            <p className="inline-flex items-center gap-2 border bg-lime-400/15 border-lime-400/30 rounded-2xl px-2 py-1 my-4">
              <span className="text-xs">"{query}"</span>
              <X
                onClick={() => {
                  setQuery("");
                }}
                size={10}
                className="cursor-pointer"
              />
            </p>
          )}

          {category && (
            <p className="inline-flex items-center gap-2 border bg-lime-400/15 border-lime-400/30 rounded-2xl px-2 py-1 my-4">
              <span className="text-xs">{category}</span>
              <X
                onClick={() => {
                  setCategory("");
                }}
                size={10}
                className="cursor-pointer"
              />
            </p>
          )}

          {featured && (
            <p className="inline-flex items-center gap-2 border bg-lime-400/15 border-lime-400/30 rounded-2xl px-2 py-1 my-4">
              <span className="text-xs">{featured}</span>
              <X
                onClick={() => {
                  setFeatured("");
                }}
                size={10}
                className="cursor-pointer"
              />
            </p>
          )}
        </div>
      </div>

      {/* products rendering */}
      {productsData && productsData !== 0 ? (
        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5">
          {productsData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <NoProductsFound query={query} handleClear={handleClear} />
      )}
    </div>
  );
};

export default Shop;
