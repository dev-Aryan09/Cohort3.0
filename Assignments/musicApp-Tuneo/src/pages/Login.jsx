import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Music2,
  Headphones,
  Disc3,
  AudioLines,
  Sparkles,
  ArrowRight,
  AudioWaveform,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const formSubmit = (data) => {
    setLoggedInUser(data);
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT SECTION ================= */}
        <section className="relative hidden overflow-hidden border-r border-white/12 lg:flex lg:flex-col lg:justify-between">
          {/* Background glows */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-105 w-105 rounded-full bg-violet-600/20 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-48 right-0 h-112.5 w-112.5 rounded-full bg-[#00F5D4]/10 blur-[130px]" />

          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
            }}
          />

          {/* Logo */}
          <header className="relative z-10 flex items-center gap-3 p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/20">
              <AudioWaveform size={22} strokeWidth={2.3} />
            </div>

            <h1 className="text-2xl font-bold tracking-[-0.04em]">
              tune<span className="text-violet-400">O</span>
            </h1>
          </header>

          {/* Main visual */}
          <div className="relative z-10 flex flex-1 items-center justify-center px-12">
            <div className="relative h-125 w-full max-w-137.5">
              {/* Center circle */}
              <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#161B26]/70 shadow-2xl shadow-violet-950/40 backdrop-blur-2xl">
                <div className="absolute inset-5 rounded-full border border-white/6" />

                <div className="absolute inset-12 rounded-full border border-violet-400/20" />

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-fuchsia-500 shadow-xl shadow-violet-600/30">
                  <Music2 size={42} />
                </div>
              </div>

              {/* Floating icon 1 */}
              <div className="float-slow absolute left-[5%] top-[12%] flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#161B26]/70 shadow-xl backdrop-blur-xl">
                <Headphones className="text-[#00F5D4]" size={34} />
              </div>

              {/* Floating icon 2 */}
              <div className="float-medium absolute right-[4%] top-[18%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#161B26]/70 backdrop-blur-xl">
                <Disc3
                  className="animate-spin text-violet-400 [animation-duration:8s]"
                  size={30}
                />
              </div>

              {/* Floating icon 3 */}
              <div className="float-fast absolute bottom-[14%] left-[12%] flex h-18 w-18 items-center justify-center rounded-full border border-white/10 bg-[#161B26]/70 backdrop-blur-xl">
                <AudioLines className="text-[#F72585]" size={31} />
              </div>

              {/* Floating icon 4 */}
              <div className="float-medium absolute bottom-[18%] right-[10%] flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#161B26]/70 backdrop-blur-xl">
                <Music2 className="text-violet-400" size={32} />
              </div>

              {/* small decorative particles */}
              <Sparkles className="float-fast absolute left-[22%] top-[33%] text-violet-400/70" />

              <div className="float-slow absolute right-[25%] top-[10%] h-2.5 w-2.5 rounded-full bg-[#00F5D4] shadow-[0_0_18px_#00F5D4]" />

              <div className="float-medium absolute bottom-[25%] left-[40%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_#7C3AED]" />
            </div>
          </div>

          {/* Bottom copy */}
          <div className="relative z-10 max-w-xl p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Your music. Your vibe.
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em]">
              Feel every beat.
              <br />
              <span className="text-[#94A3B8]">Discover your sound.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#94A3B8]">
              Step into your personal music space and keep your favorite tracks,
              artists, and playlists close.
            </p>
          </div>
        </section>

        {/* ================= RIGHT SECTION ================= */}
        <section className="relative flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          {/* mobile glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />

          <div className="relative z-10 w-full max-w-107.5 ">
            {/* Mobile logo */}
            <div className="mb-12 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
                <AudioLines size={20} />
              </div>

              <span className="text-xl font-semibold">
                tune<span className="text-violet-400">O</span>
              </span>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <p className="mb-3 text-sm font-medium text-violet-400">
                Welcome back
              </p>

              <h2 className="text-4xl font-bold tracking-[-0.03em]">
                Sign in to tuneO
              </h2>

              <p className="mt-1 text-xs leading-6 text-[#94A3B8]">
                Enter your details to continue listening.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email address
                </label>

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#161B26]/70 px-4 text-sm text-[#F8FAFC] outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-500/70 focus:ring-4 focus:ring-violet-500/20"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  {/* <button
                    type="button"
                    className="text-xs font-medium text-violet-400 transition hover:text-violet-300"
                  >
                    Forgot password?
                  </button> */}
                </div>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain 8+ characters, uppercase, lowercase, number and special character",
                      },
                    })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-white/8 bg-[#161B26]/70 px-4 pr-12 text-sm text-[#F8FAFC] outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-500/70 focus:ring-4 focus:ring-violet-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label="Show password"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition hover:text-white"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember */}
              {/* <label className="flex w-fit cursor-pointer items-center gap-2.5 text-sm text-[#94A3B8]">
                <input
                  {...register("remember")}
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-[#161B26] accent-violet-600"
                />
                Remember me
              </label> */}

              {/* Sign In */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 active:scale-[0.98] cursor-pointer"
              >
                Sign In
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/8" />

              <span className="text-xs text-[#64748B]">OR</span>

              <div className="h-px flex-1 bg-white/8" />
            </div>

            {/* Register */}
            <p className="text-center text-sm text-[#94A3B8]">
              New to tuneO?{" "}
              <button
                onClick={() => navigate("/register")}
                className="font-semibold text-violet-400 transition hover:text-violet-300 cursor-pointer"
              >
                Create an account
              </button>
            </p>
          </div>
        </section>
      </div>

      {/* Floating animation styles */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(3deg);
          }
        }

        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-14px) translateX(6px);
          }
        }

        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }

        .float-medium {
          animation: floatMedium 4s ease-in-out infinite;
        }

        .float-fast {
          animation: floatFast 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .float-slow,
          .float-medium,
          .float-fast {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Login;
