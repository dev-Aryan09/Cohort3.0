import React, { useState } from "react";

const Form = () => {
  console.log("rendering");
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded bg-gray-200 flex-col gap-5"
      >
        <input
          onChange={(e) =>
            setFormData({ ...formData, productName: e.target.value })
          }
          className="p-2 border"
          type="text"
          placeholder="Product name"
        />
        <input
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="p-2 border"
          type="text"
          placeholder="Price"
        />
        <span>Select Category</span>
        <select
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="p-2 border"
        >
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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
