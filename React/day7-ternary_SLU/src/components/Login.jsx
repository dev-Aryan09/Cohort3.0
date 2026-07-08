import React from "react";

const Login = ({ setFlag }) => {
  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1 className="italic">Login</h1>
      <form className="flex flex-col gap-4 ">
        <input
          className="border rounded p-2 border-gray-400"
          type="text"
          placeholder="Email"
        />
        <input
          className="border rounded p-2 border-gray-400"
          type="text"
          placeholder="Password"
        />
        <button className="border rounded bg-blue-600 text-white p-2 cursor-pointer">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <span
          onClick={() => {
            setFlag((prev) => !prev);
          }}
          className="text-blue-600 cursor-pointer"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
