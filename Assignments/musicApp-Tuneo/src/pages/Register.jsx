import React, { useState } from "react";
import {
  Mic2,
  Radio,
  Podcast,
  Guitar,
  Piano,
  Waves,
  Sparkles,
  Eye,
  ArrowRight,
  AudioWaveform,
  EyeOff,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfrimPassword] = useState(false);

  const formSubmit = (data) => {
    console.log(data);
    // Your register logic
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0E14] px-5 py-3 text-[#F8FAFC]">
      {/* ================= BACKGROUND ================= */}

      {/* Violet glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-100 w-100 rounded-full bg-violet-600/15 blur-[130px]" />

      {/* Mint glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-28 h-112.5 w-112.5 rounded-full bg-[#00F5D4]/10 blur-[140px]" />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[130px]" />

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================= FLOATING ICONS ================= */}

      {/* Microphone */}
      <div className="float-one absolute left-[7%] top-[12%] hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-[#161B26]/60 backdrop-blur-xl sm:flex">
        <Mic2 size={28} className="text-[#00F5D4]" />
      </div>

      {/* Radio */}
      <div className="float-two absolute right-[8%] top-[10%] hidden h-18 w-18 items-center justify-center rounded-full border border-white/8 bg-[#161B26]/60 backdrop-blur-xl md:flex">
        <Radio size={30} className="text-violet-400" />
      </div>

      {/* Guitar */}
      <div className="float-three absolute bottom-[13%] left-[8%] hidden h-20 w-20 items-center justify-center rounded-3xl border border-white/8 bg-[#161B26]/60 backdrop-blur-xl lg:flex">
        <Guitar size={33} className="text-[#F72585]" />
      </div>

      {/* Podcast */}
      <div className="float-one absolute bottom-[10%] right-[10%] hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-[#161B26]/60 backdrop-blur-xl sm:flex">
        <Podcast size={29} className="text-[#00F5D4]" />
      </div>

      {/* Piano */}
      <div className="float-two absolute left-[16%] top-[48%] hidden h-14 w-14 items-center justify-center rounded-xl border border-white/8 bg-[#161B26]/60 backdrop-blur-xl xl:flex">
        <Piano size={25} className="text-violet-300" />
      </div>

      {/* Waves */}
      <div className="float-three absolute right-[16%] top-[52%] hidden h-14 w-14 items-center justify-center rounded-full border border-white/8 bg-[#161B26]/60 backdrop-blur-xl xl:flex">
        <Waves size={25} className="text-[#FF6B6B]" />
      </div>

      {/* Decorative particles */}
      <Sparkles className="float-two absolute left-[27%] top-[15%] hidden text-violet-400/60 md:block" />

      <Sparkles
        size={18}
        className="float-three absolute bottom-[20%] right-[27%] hidden text-[#00F5D4]/60 md:block"
      />

      <div className="float-one absolute left-[12%] top-[35%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_#7C3AED]" />

      <div className="float-two absolute right-[22%] top-[24%] h-2.5 w-2.5 rounded-full bg-[#00F5D4] shadow-[0_0_18px_#00F5D4]" />

      <div className="float-three absolute bottom-[28%] left-[24%] h-2 w-2 rounded-full bg-[#F72585] shadow-[0_0_16px_#F72585]" />

      {/* ================= REGISTER CARD ================= */}

      <section className="relative z-10 w-full max-w-117.5 rounded-2xl border border-white/8 bg-[#161B26]/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-8 sm:py-3">
        {/* Logo */}
        <div className="mb-5 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-900/30">
              <AudioWaveform size={22} />
            </div>

            <span className="text-2xl font-semibold tracking-[-0.04em]">
              tune<span className="text-violet-400">O</span>
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-5 text-center">
          <p className="mb-2 text-sm font-medium text-violet-400">
            Join the sound
          </p>

          <h1 className="text-3xl font-semibold tracking-[-0.03em]">
            Create your account
          </h1>

          <p className=" text-xs leading-6 text-[#94A3B8]">
            Start building your personal music experience.
          </p>
        </div>

        {/* ================= FORM ================= */}

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-slate-300"
            >
              Full name
            </label>

            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters are required",
                },
              })}
              id="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              className="h-12 w-full rounded-xl border border-white/8 bg-[#0B0E14]/50 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-500/70 focus:ring-4 focus:ring-violet-500/10"
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-300"
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
              className="h-12 w-full rounded-xl border border-white/8 bg-[#0B0E14]/50 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-500/70 focus:ring-4 focus:ring-violet-500/10"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-slate-300"
            >
              Password
            </label>

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
                placeholder="Create password"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-white/8 bg-[#0B0E14]/50 px-4 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-500/70 focus:ring-4 focus:ring-violet-500/10"
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

          {/* CONFIRM PASSWORD */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block text-sm font-medium text-slate-300"
            >
              Confirm password
            </label>

            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Must match with your password",
                  },
                })}
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-white/8 bg-[#0B0E14]/50 px-4 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-violet-500/70 focus:ring-4 focus:ring-violet-500/10"
              />

              <button
                onClick={() => setShowConfrimPassword((prev) => !prev)}
                type="button"
                aria-label="Show confirm password"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-xs leading-5 text-[#94A3B8]">
            <input
              {...register("termsAndPrivacyPolicy", {
                required: "Must read and allow this",
              })}
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 accent-violet-600"
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                className="font-medium text-violet-400 transition hover:text-violet-300"
              >
                Terms
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="font-medium text-violet-400 transition hover:text-violet-300"
              >
                Privacy Policy
              </button>
            </span>
            {errors.termsAndPrivacyPolicy && (
              <p className="text-red-500 text-xs mt-1">
                {errors.termsAndPrivacyPolicy.message}
              </p>
            )}
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 active:scale-[0.98] cursor-pointer"
          >
            Create Account
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="mt-4 text-center text-sm text-[#94A3B8]">
          Already have an account?{" "}
          <button
          onClick={()=> navigate("/")}
            type="button"
            className="font-semibold text-violet-400 transition hover:text-violet-300 cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </section>

      {/* ================= FLOATING ANIMATION ================= */}

      <style>{`
        @keyframes floatOne {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-16px) rotate(4deg);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translate(0px, 0px);
          }

          50% {
            transform: translate(8px, -14px);
          }
        }

        @keyframes floatThree {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(12px) rotate(-4deg);
          }
        }

        .float-one {
          animation: floatOne 5s ease-in-out infinite;
        }

        .float-two {
          animation: floatTwo 6s ease-in-out infinite;
        }

        .float-three {
          animation: floatThree 4.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .float-one,
          .float-two,
          .float-three {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Register;
