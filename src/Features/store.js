import { configureStore } from '@reduxjs/toolkit'
import  categorySlice  from './AllSlice/categorySlice'
import { ProductApi } from './Api/productApi'
import { exclusiveApi } from './Api/exclusiveApi'
import  ProductSlice from './AllSlice/ProductSlice'
import  wishListSlice  from './AllSlice/wishListSlice'
import { getTotal } from './AllSlice/ProductSlice'
import cartSlice  from './AllSlice/cartSlice'

export const store = configureStore({
  reducer: {
    categoryStore: categorySlice,
    ProductStore: ProductSlice,
    wishListStore: wishListSlice,
    cartStore: cartSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware).concat(exclusiveApi.middleware),
})

store.dispatch(getTotal())