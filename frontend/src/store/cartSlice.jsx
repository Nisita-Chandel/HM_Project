// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],        // each item: { id, title, img, price, qty }
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
    addToCart(state, action) {
      const product = action.payload; // {id, title, img, price}
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      calcTotals(state);
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      calcTotals(state);
    },

    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
