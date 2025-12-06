// src/router/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout.jsx";

import HomePage from "../pages/HomePage.jsx";
import CartPage from "../pages/CartPage.jsx";

import LadiesPage from "../pages/LadiesPage.jsx";
import LadiesProductDetailsPage from "../pages/LadiesProductDetailsPage.jsx";

import MenPage from "../pages/MenPage.jsx";
import MenProductDetailsPage from "../pages/MenProductDetailsPage.jsx";

import KidsPage from "../pages/KidsPage.jsx";
import KidsProductDetailsPage from "../pages/KidsProductDetailsPage.jsx";

import BeautyPage from "../pages/BeautyPage.jsx";
import BeautyProductDetailsPage from "../pages/BeautyProductDetailsPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import AddProductPage from "../pages/AddProductPage.jsx";




export default function AppRouter() {
  return (
    <Routes>
      {/* ✅ Every page is inside HomeLayout → navbar is always visible */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Ladies */}
        <Route path="/ladies" element={<LadiesPage />} />
        <Route path="/ladies/:id" element={<LadiesProductDetailsPage />} />

        {/* Men */}
        <Route path="/men" element={<MenPage />} />
        <Route path="/men/:id" element={<MenProductDetailsPage />} />

        {/* Kids */}
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/kids/:id" element={<KidsProductDetailsPage />} />

        {/* Beauty */}
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/beauty/:id" element={<BeautyProductDetailsPage />} />

        {/* Cart / Checkout */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/auth" element={<AuthPage />} /> {/* 👈 new */}
          
       <Route path="/search" element={<SearchPage/>} />
       <Route path= "/Products" element={<ProductsPage/>}/>
       <Route path="/admin/add-product" element={<AddProductPage />} />


      </Route>
    </Routes>
  );
}
