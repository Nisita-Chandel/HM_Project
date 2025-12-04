// src/pages/HomePage.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// ---------- AUTH MODAL ----------

function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      alert("Logged in (demo)!");
    } else {
      alert("Account created (demo)!");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl leading-none"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-1">
          {mode === "login" ? "Sign in" : "Sign up"}
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          {mode === "login"
            ? "Continue to your HM Demo account"
            : "Create your HM Demo account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {mode === "signup" && (
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
                placeholder="Your name"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
              placeholder="••••••••"
            />
          </div>

          {mode === "signup" && (
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Confirm password
              </label>
              <input
                type="password"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
                placeholder="Re-enter password"
              />
            </div>
          )}

          {mode === "login" && (
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3" />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-gray-900 text-white rounded-full py-2 text-sm font-medium hover:bg-gray-700"
          >
            {mode === "login" ? "Sign in" : "Create account"}
          </button>

          {mode === "login" ? (
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="underline cursor-pointer"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="underline cursor-pointer"
              >
                Sign in
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

// ---------- NAVBAR ----------

function Navbar({ cartCount, onSignInClick, onCartClick }) {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "ladies", label: "Ladies", path: "/ladies" },
    { id: "men", label: "Men", path: "/men" },
    { id: "kids", label: "Kids", path: "/kids" },
    { id: "beauty", label: "Beauty", path: "/beauty" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div
            className="w-14 h-12 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="h-full w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              alt="H&M logo"
            />
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`relative pb-1 ${
                  item.id === "home"
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                {item.id === "home" && (
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-gray-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onSignInClick}
            className="hidden sm:inline text-sm text-gray-600 hover:text-gray-900"
          >
            Sign in
          </button>
          <div className="relative flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100">
              <i className="ri-search-line"></i>
            </button>
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-700"
            >
              🛒
              <span className="text-xs bg-white text-gray-900 px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ---------- HOME HERO + CATEGORIES ----------

function HomeSection() {
  const navigate = useNavigate();

  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] text-gray-500 mb-2">
            NEW SEASON · 2025
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Fashion for <span className="text-red-600">every style</span>.
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Discover curated edits across ladies, men, kids and beauty. Clean
            layout, easy navigation and a seamless cart experience for your HM
            project.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/ladies")}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm"
            >
              Shop Ladies
            </button>
            <button
              onClick={() => navigate("/men")}
              className="px-5 py-2.5 rounded-full border text-sm hover:bg-gray-50"
            >
              Explore Men
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-72">
            <img
              src="https://i.pinimg.com/736x/cb/81/cd/cb81cd2d826cb83eeed3de6f3659e94e.jpg"
              alt="home hero 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-md h-72">
              <img
                src="https://i.pinimg.com/736x/23/86/02/23860278614bf3b5d8fddc6862081568.jpg"
                alt="home hero 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <CategoryCard
          title="Ladies"
          desc="Dresses, gowns & daywear"
          img="https://i.pinimg.com/736x/58/bd/83/58bd83afe4a7cd700813d7eb4a7230ed.jpg"
          onClick={() => navigate("/ladies")}
        />
        <CategoryCard
          title="Men"
          desc="Smart tailoring & casuals"
          img="https://i.pinimg.com/1200x/4e/22/79/4e2279693e65c3d639aee135509e8902.jpg"
          onClick={() => navigate("/men")}
        />
        <CategoryCard
          title="Kids"
          desc="Playful fits for little ones"
          img="https://i.pinimg.com/736x/c0/01/9b/c0019b4c56c624c5d5ac04b9a6604b91.jpg"
          onClick={() => navigate("/kids")}
        />
        <CategoryCard
          title="Beauty"
          desc="Makeup & glow essentials"
          img="https://i.pinimg.com/736x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg"
          onClick={() => navigate("/beauty")}
        />
      </section>
    </main>
  );
}

function CategoryCard({ title, desc, img, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col"
    >
      <div className="h-86 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </button>
  );
}

// ---------- ROOT HOME PAGE ----------

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Navbar
        cartCount={cartCount}
        onSignInClick={() => setShowLogin(true)}
        onCartClick={() => navigate("/cart")}
      />

      {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}

      <HomeSection />
    </div>
  );
}
