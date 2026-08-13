import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  console.log("app rendering...");
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
      setFilteredProducts(res.data);
    } catch (error) {
      console.log("error in fetching products data");
    }
  };

  const filteredData = () => {
    console.log("filter running...");

    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase().trim());
    });
    console.log(result);
    setFilteredProducts(result);
  };

  //debouncing
  useEffect(() => {
    if (!searchData) {
      setFilteredProducts(productsData);
      return;
    }

    const timeout = setTimeout(() => {
      filteredData();
    }, 700);

    return () => clearTimeout(timeout); //executes when new comes
  }, [searchData]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Debouncing</h1>
      <hr />
      <input
        style={{ padding: "8px" }}
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearchData(e.target.value)}
      />
      {filteredProducts.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
