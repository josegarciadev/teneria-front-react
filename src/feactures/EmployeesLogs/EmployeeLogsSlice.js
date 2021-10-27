import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getEmployeesLogs = createAsyncThunk(
  "employees/getEmployeesLogs", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/logs/employeeLogs/all",
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
    }).then((res) => {
      return res.data;
    });
    return users;
});

const initialState = {
  employeesLogs: [],
  loading: false,
};

export const EmployeeSLogslice = createSlice({
  name: "employees",
  initialState,
  extraReducers: {
    [getEmployeesLogs.pending]: (state) => {
      state.loading = true;
    },
    [getEmployeesLogs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.employeesLogs = payload;
    },
    [getEmployeesLogs.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectEmployeesLogs= state => state.employees.employeesLogs;

export default EmployeeSLogslice.reducer;
