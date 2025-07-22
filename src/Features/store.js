import { configureStore } from '@reduxjs/toolkit'
import  categorySlice  from './AllSlice/categorySlice'
import { ProductApi } from './Api/productApi'
import { exclusiveApi } from './Api/exclusiveApi'
import  ProductSlice from './AllSlice/ProductSlice'

export const store = configureStore({
  reducer: {
    categoryStore: categorySlice,
    ProductStore: ProductSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware).concat(exclusiveApi.middleware),
})