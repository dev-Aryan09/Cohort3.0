import React, { useRef, useState } from "react";

const Form = () => {
  const [products, setProducts] = useState({});
  console.log("Products", products);

  const formRef = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const productsObj = {
      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value,
    };

    setProducts(productsObj);
  };

  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded bg-gray-200 flex-col gap-5"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border"
          type="text"
          placeholder="Product name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="p-2 border"
          type="text"
          placeholder="Price"
        />
        <span>Select Category</span>
        <select
          ref={(e) => (formRef.current.category = e)}
          className="p-2 border"
        >
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.image = e)}
          className="p-2 border"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded-xl">
          create
        </button>
      </form>
    </div>
  );
};

export default Form;
