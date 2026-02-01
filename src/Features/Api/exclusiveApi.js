import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: 'exclusiveApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/' , credentials: 'include' }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    GetAllCategory: builder.query({
      query: () => "/allcategory", 
    }),
    GetSingleCategory: builder.query({
      query: (id) => `/singleallcategory/${id}`,
    }),
    GetAllBanner: builder.query({
      query: () => "/banner",
    }),
    GetAllFlashSale: builder.query({
      query: () => "/flashsale",
    }),
    GetAllBestSelling: builder.query({
      query: () => "/bestsellingproduct",
    }),
    GetAllProduct: builder.query({
      query: () => "/product",
    }),
    GetAllSingleProduct: builder.query({
      query: (id) => `/singleproduct/${id}`,
    }),
     GetUserWiseCart: builder.query({
      query: () => `/userwisecart`,
      providesTags: ["Cart"],
    }),
    DeleteCartItem: builder.mutation({
      query: (itemId) => ({
        url: `/deletecart/${itemId}`,
        method: "DELETE",
      }),
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["Cart"],
    }),
    AddtoCart: builder.mutation({
      query: (product) => ({
        url: `/cart`,
        method: "POST",
        body: product
      }),
      invalidatesTags: ["Cart"],
    }),
    IncrementCart: builder.mutation({
      query: ({id , type}) => ({
        url: `/incrementcart/${id}`,
        method: "POST",
        body: type,
      }),
      invalidatesTags: ["Cart"],
    }),
     DecrementCart: builder.mutation({
      query: ({id , type}) => ({
        url: `/decrementcart/${id}`,
        method: "POST",
        body: type,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoryQuery , useGetAllBannerQuery , useGetAllFlashSaleQuery , useGetAllBestSellingQuery , useGetAllProductQuery , useGetAllSingleProductQuery , useGetSingleCategoryQuery , useGetUserWiseCartQuery , useDeleteCartItemMutation , useAddtoCartMutation , useIncrementCartMutation , useDecrementCartMutation } = exclusiveApi