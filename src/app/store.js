import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feactures/counter/CounterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})