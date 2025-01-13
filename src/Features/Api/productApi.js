import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/'}),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: ()=> "/products"
    }),
    GetBestSellingProducts: builder.query({
      query: ()=> "/products/category/smartphones"
    }),
  }),
})


export const { useGetAllProductQuery , useGetBestSellingProductsQuery} = ProductApi


