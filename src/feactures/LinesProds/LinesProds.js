import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getLinesProds = createAsyncThunk("linesProds/getLinesProds", async () => {
  const users = await axiosFetch({
    method: "get",
    url: "/admin/lineProd/all",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user-token"),
    },
  }).then((res) => {
    return res.data;
  });
  return users;
});

const initialState = {
  LinesProds: [],
  loading: false,
};

export const LinesProdsSlice = createSlice({
  name: "linesProds",
  initialState,
  extraReducers: {
    [getLinesProds.pending]: (state) => {
      state.loading = true;
    },
    [getLinesProds.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.LinesProds = payload;
    },
    [getLinesProds.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectLinesProds = (state) => state.linesProds.LinesProds;

export default LinesProdsSlice.reducer;
