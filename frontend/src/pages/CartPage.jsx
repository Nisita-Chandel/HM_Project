// src/pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  console.log("CartPage render, items:", items);

  // ---------------- EMPTY CART -------------------
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white border border-gray-300 rounded-2xl p-6 shadow-md">
          <h1 className="text-2xl font-semibold mb-2 text-black">Your cart</h1>

          <p className="text-sm text-gray-600 mb-4">
            Your cart is empty. Browse our collections and add something special ✨
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  // ---------------- CART PAGE -------------------
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 text-black">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-1">
              Shopping bag
            </p>

            <h1 className="text-2xl lg:text-3xl font-semibold">Your cart</h1>

            <p className="text-xs text-gray-600 mt-1">
              Review your items before proceeding to checkout.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-600">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 border border-gray-400">
              🛒
            </span>
            <span>{totalItems} item{totalItems > 1 ? "s" : ""} in cart</span>
          </div>
        </div>

        {/* Layout: items + summary */}
        <div className="grid lg:grid-cols-[2fr,1.1fr] gap-6 lg:gap-8">

          {/* LEFT: Cart Items */}
          <div className="bg-white border border-gray-300 rounded-2xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold">Items in your bag</h2>

              <button
                onClick={() => dispatch(clearCart())}
                className="text-xs text-red-500 hover:text-red-400 hover:underline"
              >
                Clear cart
              </button>
            </div>

            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center bg-gray-100 border border-gray-300 rounded-xl p-3"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Qty: <span className="font-medium">{item.qty}</span>
                    </p>
                    <p className="text-[11px] text-gray-600">
                      Price: ₹{item.price} each
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-xs">
                    <p className="font-semibold">₹{item.price * item.qty}</p>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="px-3 py-1 rounded-full border border-red-400 text-red-500 hover:bg-red-50 transition text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Summary */}
          <aside className="bg-white border border-gray-300 rounded-2xl p-5 shadow-md h-fit lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold mb-4">Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Items</span>
                <span>{totalItems} item{totalItems > 1 ? "s" : ""}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Estimated shipping</span>
                <span className="text-gray-700">Calculated at checkout</span>
              </div>

              <div className="border-t border-gray-300 pt-3 mt-2 flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-2">
              Taxes and final shipping will be shown on the checkout page.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/checkout"
                className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-900 transition"
              >
                Proceed to checkout
              </Link>

              <button
                onClick={() => navigate("/")}
                className="w-full text-xs text-gray-600 hover:text-black underline underline-offset-2"
              >
                Continue shopping
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
