import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getDeparments = createAsyncThunk(
  "deparments/getDeparments", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/admin/department/all",
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
    }).then((res) => {
      return res.data;
    });
    return users;
});

const initialState = {
  deparments: [],
  loading: false,
};

export const DeparmentsSlice = createSlice({
  name: "deparments",
  initialState,
  extraReducers: {
    [getDeparments.pending]: (state) => {
      state.loading = true;
    },
    [getDeparments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.deparments = payload;
    },
    [getDeparments.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectDeparments = state => state.deparments.deparments;

export default DeparmentsSlice.reducer;
