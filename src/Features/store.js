import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './AllSlice/counterSlice'

export const store = configureStore({
  reducer: {
    count: counterSlice
  },
})