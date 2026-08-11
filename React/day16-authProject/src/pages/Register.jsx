import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthStore } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    registerFormSubmit,
    errors,
    navigate,
    setLoggedInUser,
    registeredUsers,
    setRegisteredUsers,
  } = useAuth();

  return (
    <main className="h-screen w-full flex items-center justify-center bg-linear-to-r from-white to-black">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl shadow-lg w-87.5">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Register
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit(registerFormSubmit)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          {errors.name && (
            <p className="text-xs text-red-500 -mt-3">{errors.name.message}</p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          {errors.email && (
            <p className="text-xs text-red-500 -mt-3">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is requird",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          {errors.password && (
            <p className="text-xs text-red-500 -mt-3">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-200 mt-4 text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-purple-300 hover:underline text-lg cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </main>
  );
};

export default Register;
