import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getUsers = createAsyncThunk(
  "user/getUsers", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/admin/user/all",
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
    }).then((res) => {
      return res.data;
    });
    return users;
});

const initialState = {
  currentUser: {},
  allUser: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allUser = payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectUsers = state => state.user.allUser;

export default userSlice.reducer;
