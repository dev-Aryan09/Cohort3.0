import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductsPage = () => {
  console.log("Products page rendering...", performance.now());
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsData = async () => {
    try {
      const res = await axiosInstance.get("/products");
      setProductsData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error in products API", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  if (isLoading)
    return <h1 className="text-3xl font-bold">Loading Users...</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {productsData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsPage;
