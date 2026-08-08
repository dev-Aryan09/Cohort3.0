import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Star } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

const stats = [
  {
    value: "20K+",
    label: "Products",
  },
  {
    value: "50K+",
    label: "Users",
  },
  {
    value: "4.9★",
    label: "Rating",
  },
];

const Login = () => {
  const { loggedInUser, setLoggedInUser, registeredUsers } =
    useContext(MyStore);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    // checking user EXIST or NOT
    const isUserLogged = registeredUsers.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (!isUserLogged) {
      toast.error("Invalid credentials!", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      // reset();
      return;
    }

    // isUserLoggedIn is the ACTUAL user object
    setLoggedInUser(isUserLogged);
    localStorage.setItem("loggedInUser", JSON.stringify(isUserLogged));

    toast.success("Logged in Successfully", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });

    reset();
    navigate("/main");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT ================= */}

        <div className="relative hidden overflow-hidden border-r border-white lg:flex">
          {/* Background Glow */}
          <div className="absolute left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

          <div className="relative flex w-full flex-col gap-20 px-14 py-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400">
                <Zap className="h-6 w-6 fill-black text-black" />
              </div>

              <h1 className="text-2xl font-semibold">
                Sky<span className="text-lime-400">Mart</span>
              </h1>
            </div>

            {/* Hero Text */}
            <div className="max-w-xl">
              <p className="mb-2 font-semibold uppercase tracking-[1px] text-lime-400">
                Welcome Back
              </p>

              <h2 className="text-5xl font-semibold leading-tight">
                Shop the future.
                <br />
                <span className="text-lime-400">Today.</span>
              </h2>

              <p className="mt-6 text-md leading-6 text-neutral-500">
                Thousands of products, lightning-fast delivery, and <br />{" "}
                prices that make your wallet happy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white bg-white/2 py-4 text-center backdrop-blur"
                >
                  <h3 className="text-lg font-bold text-lime-400">
                    {item.value}
                  </h3>

                  <p className="text-xs text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-2xl shadow-black/40">
            <h2 className="text-2xl font-semibold">Sign in</h2>

            <p className="mt-2 text-md text-neutral-500">
              Enter your credentials to continue
            </p>

            <form
              onSubmit={handleSubmit(formSubmit)}
              className="mt-8 space-y-4"
            >
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#1b1b1b] pl-14 pr-4 text-md text-white placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 focus:ring-offset-0"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password id required",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#1b1b1b] pl-14 pr-14 text-md text-white  placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 focus:ring-offset-0"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white cursor-pointer"
                >
                  {showPassword ? (
                    <span title="Hide password">
                      <EyeOff className="h-5 w-5" />
                    </span>
                  ) : (
                    <span title="Show password">
                      <Eye className="h-5 w-5" />
                    </span>
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button className="group flex h-12 w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-lime-300">
                Sign in
                <ArrowRight className="transition group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-neutral-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-lime-400 hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
