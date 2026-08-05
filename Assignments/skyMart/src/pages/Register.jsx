import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Zap, User, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registeredUsers, setRegisteredUsers } = useContext(MyStore);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    setRegisteredUsers([...registeredUsers, data]);

    reset();

    // navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400">
            <Zap className="h-4 w-4 fill-black text-black" />
          </div>

          <h1 className="text-xl font-semibold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-[#111111] p-7 shadow-2xl shadow-black/30">
          <h2 className="text-3xl font-semibold text-white">Create account</h2>

          <p className="text-neutral-400">Join SkyMart and start shopping</p>

          <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-4">
            {/* Name */}
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              />

              <input
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Your name is required",
                  },
                })}
                type="text"
                placeholder="Full name"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-12 pr-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 focus:ring-offset-0"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              />

              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-12 pr-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 focus:ring-offset-0"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters is required",
                  },
                })}
                type="password"
                placeholder="Password (min 6 chars)"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-12 pr-12 text-white placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 focus:ring-offset-0"
              />

              <Eye
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-500"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              />

              <input
                {...register("confirmPassword", {
                  required: "Must match with your password",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters is required",
                  },
                })}
                type="password"
                placeholder="Confirm password"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-12 pr-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 focus:ring-offset-0"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-lime-300"
            >
              Create Account
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-5 text-sm text-center text-neutral-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-lime-400 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
