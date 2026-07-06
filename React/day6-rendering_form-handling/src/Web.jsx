import React, { useState } from "react";

const Web = () => {
  console.log("App rendering...");
  const [formData, setFormData] = useState({});

  return (
    <>
      <div className="flex flex-col gap-4 w-90 p-4 bg-gray-300">
        <input
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          className="border p-2"
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          className="border p-2"
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          className="border p-2"
          type="text"
          placeholder="password"
        />
        <button className="border rounded-sm p-1 bg-green-400 text-white uppercase">
          submit
        </button>
      </div>
      <h1>Name is - {formData.name}</h1>
      <h1>Email is - {formData.email}</h1>
      <h1>Name is - {formData.password}</h1>
    </>
  );
};

export default Web;
