import { configureStore } from '@reduxjs/toolkit'
import  DeparmentsSlice  from '../feactures/Departments/DepartmentsSlice'
import EmployeeSlice from '../feactures/Employees/EmployeeSlice'
import  LinesSlice  from '../feactures/Lines/Lines'
import  LinesLogsSlice  from '../feactures/LinesLogs/LinesLogs'
import  LinesProdsSlice  from '../feactures/LinesProds/LinesProds'
import ProductProviderSlice from '../feactures/ProductProviders/ProductProviderSlice'
import ProductSlice from '../feactures/Products/ProductSlice'
import  ProviderSlice  from '../feactures/Providers/Providers'
import UserSlice from '../feactures/User/UserSlice'

export const store = configureStore({
  reducer: {
    user:UserSlice,
    deparments:DeparmentsSlice,
    employee:EmployeeSlice,
    product:ProductSlice,
    provider:ProviderSlice,
    productProvider:ProductProviderSlice,
    lines:LinesSlice,
    linesProds:LinesProdsSlice,
    linesLogs:LinesLogsSlice
  },
})