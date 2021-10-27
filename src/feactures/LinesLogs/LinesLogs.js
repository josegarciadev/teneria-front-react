import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getLinesLogs = createAsyncThunk("linesLogs/getLinesLogs", async () => {
  const users = await axiosFetch({
    method: "get",
    url: "/logs/lineProdLog/all",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user-token"),
    },
  }).then((res) => {
    return res.data;
  });
  return users;
});

const initialState = {
  LinesLogs: [],
  loading: false,
};

export const LinesLogsSlice = createSlice({
  name: "linesLogs",
  initialState,
  extraReducers: {
    [getLinesLogs.pending]: (state) => {
      state.loading = true;
    },
    [getLinesLogs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.LinesLogs = payload;
    },
    [getLinesLogs.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectLinesLogs = (state) => state.linesLogs.LinesLogs;

export default LinesLogsSlice.reducer;
