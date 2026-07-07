import React, { useState } from "react";

const Web = () => {
  console.log("App rendering...");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    // passing new reference to the state so that React should know about the change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  return (
    <>
      <div className="flex flex-col gap-4 w-90 p-4 bg-gray-300">
        <input
          name="name" // will be accessed via e.target.name
          onChange={handleChange}
          className="border p-2"
          type="text"
          placeholder="name"
        />
        <input
          name="email"
          onChange={handleChange}
          className="border p-2"
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={handleChange}
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
