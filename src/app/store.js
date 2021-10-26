import { configureStore } from '@reduxjs/toolkit'
import  DeparmentsSlice  from '../feactures/Departments/DepartmentsSlice'
import EmployeeSlice from '../feactures/Employees/EmployeeSlice'
import UserSlice from '../feactures/User/UserSlice'

export const store = configureStore({
  reducer: {
    user:UserSlice,
    deparments:DeparmentsSlice,
    employee:EmployeeSlice
  },
})