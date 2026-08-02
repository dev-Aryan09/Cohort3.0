import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";

const Login = () => {
  const { setLoggedInUser, registeredUsers } = useContext(AuthStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const formSubmit = (data) => {
    // 'data' is coming from login page,
    // using this 'data' finding the user inside our registered users
    const user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      alert("Invalid access, Please enter valid credentials");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    reset();
    navigate("/main");
  };

  return (
    <main className="h-screen w-full flex items-center justify-center bg-linear-to-r from-white to-black">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl shadow-lg w-87.5">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Login
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.email && (
            <p className="text-xs text-red-500 -mt-3">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.password && (
            <p className="text-xs text-red-500 -mt-3">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-200 mt-4 text-center">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-300 text-lg hover:underline cursor-pointer"
          >
            Register
          </button>
        </p>
      </div>
    </main>
  );
};

export default Login;
