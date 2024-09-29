import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: defaultState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProducts, findProduct } = productSlice.actions;

export default productSlice.reducer;
