import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getLines = createAsyncThunk("lines/getLines", async () => {
  const users = await axiosFetch({
    method: "get",
    url: "/admin/line/all",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user-token"),
    },
  }).then((res) => {
    return res.data;
  });
  return users;
});

const initialState = {
  Lines: [],
  loading: false,
};

export const LinesSlice = createSlice({
  name: "lines",
  initialState,
  extraReducers: {
    [getLines.pending]: (state) => {
      state.loading = true;
    },
    [getLines.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Lines = payload;
    },
    [getLines.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectLines = (state) => state.lines.Lines;

export default LinesSlice.reducer;
