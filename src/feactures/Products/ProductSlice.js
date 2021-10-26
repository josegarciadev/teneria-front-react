import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getProducts = createAsyncThunk(
  "product/getProducts", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/admin/product/all",
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
    }).then((res) => {
      return res.data;
    });
    return users;
});


const initialState = {
  products: [

  ],
  loading: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectProducts= state => state.product.products;

export default ProductSlice.reducer;
