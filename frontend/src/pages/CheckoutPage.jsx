import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadRazorpayScript } from "../utils/loadRazorpay";

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // If cart is empty
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
        <div className="max-w-md w-full bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur">
          <h1 className="text-2xl font-semibold mb-3 text-slate-50">
            Checkout
          </h1>
          <p className="text-slate-400 mb-4">
            Your cart is empty. Add something you love and come back 💖
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-full bg-slate-50 text-slate-900 text-sm font-medium hover:bg-white transition"
          >
            Go back to shopping
          </button>
        </div>
      </div>
    );
  }

  const shippingCharge = totalAmount >= 1999 ? 0 : 99;
  const grandTotal = totalAmount + shippingCharge;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // 1) Load Razorpay script
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Failed to load Razorpay SDK. Check your internet.");
      return;
    }

    try {
      // 2) Create order on your backend
      const res = await axios.post("http://localhost:3000/api/create-order", {
        amount: grandTotal, // in rupees
      });

      const { orderId, amount, currency } = res.data;

      // 3) Open Razorpay checkout
      const options = {
        key: RAZORPAY_KEY_ID,
        amount, // in paise
        currency,
        name: "HM Demo Store",
        description: "Order payment",
        order_id: orderId,
        prefill: {
          name: "Demo User",
          email: "demo@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0f172a",
        },
        handler: function (response) {
          console.log("Payment success:", response);
          alert("Payment successful! (demo)");
          navigate("/");
        },
        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
          },
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error starting payment:", error);
      alert("Unable to start payment. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Top header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
              Secure checkout
            </p>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-50">
              Complete your order
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/40">
              🔒
            </span>
            <span>256-bit SSL encrypted payment</span>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[2fr,1.1fr] gap-6 lg:gap-8">
          {/* LEFT: Details */}
          <div className="space-y-6">
            {/* Stepper */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center text-[11px] font-semibold">
                  1
                </span>
                <span className="font-medium">Shipping</span>
              </div>
              <span className="h-px flex-1 bg-slate-700" />
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-[11px]">
                  2
                </span>
                <span className="text-slate-500">Payment</span>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Contact info */}
              <section className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur">
                <h2 className="text-sm font-semibold mb-4 text-slate-50">
                  Contact information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </section>

              {/* Shipping address */}
              <section className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur">
                <h2 className="text-sm font-semibold mb-4 text-slate-50">
                  Shipping address
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Address line
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="House no, street, area"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      PIN code
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                      placeholder="110001"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      defaultValue="India"
                      className="w-full border border-slate-700/70 bg-slate-900/60 text-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-slate-300 placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </section>

              {/* Payment method */}
              <section className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur">
                <h2 className="text-sm font-semibold mb-4 text-slate-50">
                  Payment method
                </h2>
                <div className="space-y-3 text-sm">
                  <label
                    className={`flex items-center justify-between gap-3 cursor-pointer rounded-xl border px-3 py-2 transition ${
                      paymentMethod === "cod"
                        ? "border-emerald-500 bg-emerald-500/10"
                        : "border-slate-700 bg-slate-900/40 hover:bg-slate-900/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span>Cash on delivery (COD)</span>
                    </div>
                    <span className="text-[11px] text-slate-300">
                      Pay at your doorstep
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between gap-3 cursor-pointer rounded-xl border px-3 py-2 transition ${
                      paymentMethod === "upi"
                        ? "border-emerald-500 bg-emerald-500/10"
                        : "border-slate-700 bg-slate-900/40 hover:bg-slate-900/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span>UPI (Google Pay / PhonePe / Paytm)</span>
                    </div>
                    <span className="text-[11px] text-slate-300">
                      Fast & secure
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between gap-3 cursor-pointer rounded-xl border px-3 py-2 transition ${
                      paymentMethod === "card"
                        ? "border-emerald-500 bg-emerald-500/10"
                        : "border-slate-700 bg-slate-900/40 hover:bg-slate-900/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span>Credit / Debit card</span>
                    </div>
                    <span className="text-[11px] text-slate-300">
                      VISA / MasterCard / RuPay
                    </span>
                  </label>

                  <p className="text-xs text-slate-500 mt-2">
                    * Payment uses Razorpay test mode (demo). Connect your live
                    keys in <code>.env</code> for production.
                  </p>
                </div>
              </section>

              {/* Place order button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span className="text-emerald-400">✔</span> By placing the
                  order, you agree to our terms & return policy.
                </p>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-white shadow-lg shadow-slate-900/30 transition"
                >
                  Place order ({totalItems} items)
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Order summary */}
          <aside className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur h-fit lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold mb-4 text-slate-50 flex items-center justify-between">
              Order summary
              <span className="text-[11px] text-slate-400">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            </h2>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-slate-50 line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Qty: {item.qty}
                    </p>
                  </div>
                  <div className="text-right text-xs">
                    <p className="font-semibold text-slate-50">
                      ₹{item.price * item.qty}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      ₹{item.price} each
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-700/70 mt-4 pt-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span className="text-slate-50">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Shipping</span>
                <span className="text-slate-50">
                  {shippingCharge === 0 ? "Free" : `₹${shippingCharge}`}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-base mt-2">
                <span className="text-slate-50">Total</span>
                <span className="text-slate-50">₹{grandTotal}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Prices include all taxes. You’ll review payment details in the
                Razorpay secure window.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
