// src/layouts/HomeLayout.jsx
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  const navigate = useNavigate();

  // favourites count
  const favCount = useSelector((state) => state.favorites.items.length);

  // cart total items
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* NAVBAR */}
      <nav className="border-b border-gray-300 py-4 px-8 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div
            className="text-xl font-bold tracking-wide cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="w-20"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              alt="H&M Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm md:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/ladies"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "text-gray-400"
              }
            >
              Ladies
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "text-gray-400"
              }
            >
              Men
            </NavLink>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "text-gray-400"
              }
            >
              Kids
            </NavLink>
            <NavLink
              to="/beauty"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "text-gray-400"
              }
            >
              Beauty
            </NavLink>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
        <button onClick={() => navigate("/search")}>
  <Search className="text-gray-600 cursor-pointer" size={22} />
</button>

          {/* User -> Auth page */}
          <button
            type="button"
            onClick={() => navigate("/auth")}
            className="relative"
          >
            <User className="text-gray-600 cursor-pointer" size={22} />
          </button>

          {/* ❤️ Favorites */}
          <button
            type="button"
            onClick={() => navigate("/favorites")}
            className="relative"
          >
            <Heart className="text-gray-600 cursor-pointer" size={22} />
            {favCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
                {favCount}
              </span>
            )}
          </button>

          {/* 🛍 Cart */}
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="relative"
          >
            <ShoppingBag className="text-gray-600 cursor-pointer" size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] px-1.5 py-[1px] rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
