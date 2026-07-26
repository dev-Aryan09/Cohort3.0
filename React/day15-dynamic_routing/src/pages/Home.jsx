import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductsCard from "../components/ProductCard";

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);
  console.log(productsData, performance.now());

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api ", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 gap-4">
        {productsData.map((product) => {
          return <ProductsCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
