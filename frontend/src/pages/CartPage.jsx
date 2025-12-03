// src/pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();

  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  console.log("CartPage render, items:", items);

  // Empty cart state (styled)
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
        <div className="max-w-md w-full bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur">
          <h1 className="text-2xl font-semibold mb-2 text-slate-50">
            Your cart
          </h1>
          <p className="text-sm text-slate-400 mb-4">
            Your cart is empty. Browse our collections and add something
            special ✨
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-slate-50 text-slate-900 text-sm font-medium hover:bg-white transition"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
              Shopping bag
            </p>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-50">
              Your cart
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Review your items before proceeding to checkout.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 border border-slate-600">
              🛒
            </span>
            <span>{totalItems} item{totalItems > 1 ? "s" : ""} in cart</span>
          </div>
        </div>

        {/* Layout: items + summary */}
        <div className="grid lg:grid-cols-[2fr,1.1fr] gap-6 lg:gap-8">
          {/* LEFT: Cart items */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-50">
                Items in your bag
              </h2>
              <button
                onClick={() => dispatch(clearCart())}
                className="text-xs text-rose-400 hover:text-rose-300 hover:underline"
              >
                Clear cart
              </button>
            </div>

            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center bg-slate-900/60 border border-slate-700/70 rounded-xl p-3"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-50 line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Qty: <span className="font-medium">{item.qty}</span>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Price: ₹{item.price} each
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-xs">
                    <p className="font-semibold text-slate-50">
                      ₹{item.price * item.qty}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="px-3 py-1 rounded-full border border-rose-500/60 text-rose-300 hover:bg-rose-500/10 transition text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Summary + CTA */}
          <aside className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur h-fit lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold mb-4 text-slate-50">
              Summary
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Items</span>
                <span className="text-slate-50">
                  {totalItems} item{totalItems > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span className="text-slate-50">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated shipping</span>
                <span className="text-slate-50">Calculated at checkout</span>
              </div>
              <div className="border-t border-slate-700/70 pt-3 mt-2 flex justify-between text-base font-semibold">
                <span className="text-slate-50">Total</span>
                <span className="text-slate-50">₹{totalAmount}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-2">
              Taxes and final shipping will be shown on the checkout page.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/checkout"
                className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-white shadow-lg shadow-slate-900/30 transition"
                onClick={() => console.log("Link clicked")}
              >
                Proceed to checkout
              </Link>

              <button
                onClick={() => navigate("/")}
                type="button"
                className="w-full text-xs text-slate-400 hover:text-slate-200 underline underline-offset-2"
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
