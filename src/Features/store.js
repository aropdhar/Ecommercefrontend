import { configureStore } from '@reduxjs/toolkit'
import  category  from './AllSlice/categorySlice'
import { ProductApi } from './Api/productApi'
import { exclusiveApi } from './Api/exclusiveApi'

export const store = configureStore({
  reducer: {
    categorySlice: category,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware).concat(exclusiveApi.middleware),
})