import React from "react";
import { useState } from "react";

const Register = ({ setFlag, setUsers }) => {
  const [formData, setFormData] = useState({
    username: "John Doe",
    email: "john@gamil.com",
    password: "12345",
  });

  const handleChnage = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // users.push(formData) // this upadates JS memory only

    // setUsers([...users, formData]);
    setUsers((prev) => [...prev, formData]);

    // cleaning the input fields after submission
    /*
    -> reference identity decides if the update happens — but the keys/values inside the new object decide if your inputs keep working correctly. That's why the fix is resetting to { username: "", email: "", password: "" } rather than {}.
    */
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    /*
    setFormData({}) <- this new object is the new reference so re-render triggers
    */
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1 className="italic">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          name="username"
          value={formData.username}
          onChange={handleChnage}
          className="border rounded p-2 border-gray-400"
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChnage}
          className="border rounded p-2 border-gray-400"
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChnage}
          className="border rounded p-2 border-gray-400"
          type="text"
          placeholder="Password"
        />
        <button className="border rounded bg-blue-600 text-white p-2 cursor-pointer">
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            setFlag((prev) => !prev);
          }}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
