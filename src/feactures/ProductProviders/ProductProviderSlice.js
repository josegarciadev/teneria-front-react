import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getProductProviders = createAsyncThunk(
  "prod/getProductProviders", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/admin/product/prodprov/all",
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

export const ProductProviderSlice = createSlice({
  name: "prod",
  initialState,
  extraReducers: {
    [getProductProviders.pending]: (state) => {
      state.loading = true;
    },
    [getProductProviders.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProductProviders.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectProducts= state => state.prod.products;

export default ProductProviderSlice.reducer;

