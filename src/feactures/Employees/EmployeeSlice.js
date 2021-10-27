import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../../config/config";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees", 
  async () => {
    const users = await axiosFetch({
      method: "get",
      url: "/logs/employee/all",
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
    }).then((res) => {
      return res.data;
    });
    return users;
});

const initialState = {
  employees: [],
  loading: false,
};

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.loading = true;
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.employees = payload;
    },
    [getEmployees.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectEmployees= state => state.employee.employees;

export default EmployeeSlice.reducer;
