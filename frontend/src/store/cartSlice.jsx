// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const calcTotals = (state) => {
  state.totalItems = state.items.reduce((sum, item) => sum + item.qty, 0);
  state.totalAmount = state.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
      calcTotals(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      calcTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      calcTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// safe selector
export const selectCart = (state) =>
  state.cart || { items: [], totalItems: 0, totalAmount: 0 };

export default cartSlice.reducer;
