import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './AllSlice/counterSlice'
import { ProductApi } from './Api/productApi'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
})