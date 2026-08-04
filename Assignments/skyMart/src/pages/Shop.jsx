import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import axios from "axios";
import ProductsLoader from "../components/ProductsLoader";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { productsData, setProductsData } = useContext(MyStore);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    getProductsData();
  }, []);

  if (isLoading) return <ProductsLoader />;
  return (
    <div className="grid grid-cols-2 gap-4 py-4 px-4 sm:px-12 sm:grid-cols-3 md:px-24 md:grid-cols-3 lg:px-26 lg:grid-cols-4 xl:px-36 xl:grid-cols-5">
      {productsData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
