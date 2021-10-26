import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getProviders = createAsyncThunk(
  "provider/getProviders", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/admin/provider/all",
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
    }).then((res) => {
      return res.data;
    });
    return users;
});


const initialState = {
  providers: [

  ],
  loading: false,
};

export const ProviderSlice = createSlice({
  name: "provider",
  initialState,
  extraReducers: {
    [getProviders.pending]: (state) => {
      state.loading = true;
    },
    [getProviders.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.providers = payload;
    },
    [getProviders.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectProvider= state => state.provider.providers;

export default ProviderSlice.reducer;
