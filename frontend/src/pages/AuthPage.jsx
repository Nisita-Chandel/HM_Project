// src/pages/AuthPage.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Lock, User as UserIcon } from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "register"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        {/* LEFT SIDE: Brand / Info */}
        <div className="hidden md:flex flex-col justify-between rounded-3xl bg-black text-white p-8 shadow-2xl">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
                alt="H&M"
                className="h-10"
              />
              <span className="text-xs uppercase tracking-[0.25em] text-gray-300">
                Online Store
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              Welcome to your H&M account
            </h2>
            <p className="text-sm text-gray-300">
              Save your favourite items, track orders, and checkout faster with
              your personal account.
            </p>
          </div>

          <div className="mt-8 text-xs text-gray-400">
            <p>Secure login • No spam • Cancel anytime</p>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-200">
            <button
              className={`flex-1 py-2 text-sm font-semibold transition-all duration-200
                ${
                  mode === "login"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400 hover:text-black"
                }
              `}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-sm font-semibold transition-all duration-200
                ${
                  mode === "register"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400 hover:text-black"
                }
              `}
              onClick={() => setMode("register")}
            >
              Register
            </button>
          </div>

          {/* Title + Subtitle */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {mode === "login"
                ? "Log in to access your favourites, orders and more."
                : "Join H&M to save favourites and enjoy a faster checkout."}
            </p>
          </div>

          {/* Forms */}
          {mode === "login" ? (
            <LoginForm switchToRegister={() => setMode("register")} />
          ) : (
            <RegisterForm switchToLogin={() => setMode("login")} />
          )}
        </div>
      </div>
    </div>
  );
}

/* --------------- Reusable floating-label input --------------- */
function FloatingInput({ label, type = "text", icon: Icon, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Icon className="w-4 h-4 text-gray-400" />
        </span>
      )}
      <input
        type={type}
        className={`peer w-full border border-gray-300 rounded-md px-3 py-2 pt-4 text-sm bg-white
          focus:outline-none focus:ring-1 focus:ring-black focus:border-black
          ${Icon ? "pl-9" : ""}
        `}
        placeholder=" "
        {...props}
      />
      <label
        className={`pointer-events-none absolute text-[11px] text-gray-500
          left-${Icon ? "9" : "3"} top-2
          transition-all duration-150
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-xs
          peer-focus:top-1.5
          peer-focus:text-[11px]
        `}
        style={{ left: Icon ? "2.25rem" : "0.75rem" }} // quick fix for Tailwind's dynamic class
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- LOGIN FORM ---------------- */
function LoginForm({ switchToRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend login API
    toast.success("Login successful! 🎉", { position: "top-center" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <FloatingInput
        label="Email"
        type="email"
        icon={Mail}
        required
        name="email"
      />
      <FloatingInput
        label="Password"
        type="password"
        icon={Lock}
        required
        name="password"
      />

      <div className="flex items-center justify-between text-xs mt-1">
        <label className="flex items-center gap-2 text-gray-500">
          <input type="checkbox" className="w-3.5 h-3.5" />
          Remember me
        </label>
        <button
          type="button"
          className="text-gray-500 hover:text-black underline underline-offset-2"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full mt-3 bg-black text-white text-sm font-medium py-2.5 rounded-md 
          hover:bg-gray-900 active:scale-[0.97] transition-all duration-150"
      >
        Login
      </button>

      <Divider label="or continue with" />

      <SocialButtons />

      <p className="text-[11px] text-gray-500 text-center mt-3">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={switchToRegister}
          className="text-black underline hover:text-gray-700 active:scale-95 transition"
        >
          Register
        </button>
      </p>
    </form>
  );
}

/* ---------------- REGISTER FORM ---------------- */
function RegisterForm({ switchToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend register API
    toast.success("Account created successfully! 🎉", {
      position: "top-center",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <FloatingInput
          label="First Name"
          type="text"
          icon={UserIcon}
          required
          name="firstName"
        />
        <FloatingInput
          label="Last Name"
          type="text"
          icon={UserIcon}
          required
          name="lastName"
        />
      </div>

      <FloatingInput
        label="Email"
        type="email"
        icon={Mail}
        required
        name="email"
      />

      <FloatingInput
        label="Password"
        type="password"
        icon={Lock}
        required
        name="password"
      />

      <FloatingInput
        label="Confirm Password"
        type="password"
        icon={Lock}
        required
        name="confirmPassword"
      />

      <div className="text-[11px] text-gray-500 mt-1">
        By creating an account, you agree to H&M&apos;s{" "}
        <span className="underline">Terms & Conditions</span> and{" "}
        <span className="underline">Privacy Policy</span>.
      </div>

      <button
        type="submit"
        className="w-full mt-3 bg-black text-white text-sm font-medium py-2.5 rounded-md 
          hover:bg-gray-900 active:scale-[0.97] transition-all duration-150"
      >
        Create Account
      </button>

      <Divider label="or sign up with" />

      <SocialButtons />

      <p className="text-[11px] text-gray-500 text-center mt-3">
        Already have an account?{" "}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-black underline hover:text-gray-700 active:scale-95 transition"
        >
          Login
        </button>
      </p>
    </form>
  );
}

/* --------------- Divider ---------------- */
function Divider({ label }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <span className="h-px flex-1 bg-gray-200" />
      <span className="text-[11px] text-gray-400 uppercase tracking-[0.15em]">
        {label}
      </span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

/* --------------- Social Buttons ---------------- */
function SocialButtons() {
  return (
    <div className="flex gap-3 mt-1">
      <button
        type="button"
        className="flex-1 border border-gray-300 rounded-md py-2 text-xs font-medium
          flex items-center justify-center gap-2 hover:bg-gray-50 active:scale-[0.97] transition-all"
      >
        <span className="text-lg">
            <img className="w-8" src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="" />
        </span>
        <span>Google</span>
      </button>
      <button
        type="button"
        className="flex-1 border border-gray-300 rounded-md py-2 text-xs font-medium
          flex items-center justify-center gap-2 hover:bg-gray-50 active:scale-[0.97] transition-all"
      >
        <span className="text-lg text-blue-600">
            <img className="w-10" src="https://s.yimg.com/ny/api/res/1.2/0osJFgvzW1z0z.oxwXI4qQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/creative_bloq_161/f4eccbe0bc6e1ac587d7ab60c74ba4a4" alt="" />
        </span>
        <span>Facebook</span>
      </button>
    </div>
  );
}
