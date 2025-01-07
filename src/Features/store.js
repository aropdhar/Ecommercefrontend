import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './AllSlice/counterSlice'
import { ProductApi } from './Api/productApi'
import { exclusiveApi } from './Api/exclusiveApi'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware).concat(exclusiveApi.middleware),
})