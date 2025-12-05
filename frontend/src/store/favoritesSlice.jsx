import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [], // { id, title, price, img, category? }
  },
  reducers: {
    toggleFavorite(state, action) {
      const product = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex !== -1) {
        // remove from favorites
        state.items.splice(existingIndex, 1);
      } else {
        // add to favorites
        state.items.push(product);
      }
    },
    clearFavorites(state) {
      state.items = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
