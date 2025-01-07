import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: 'exclusiveApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/' }),
  endpoints: (builder) => ({
    GetAllCategory: builder.query({
      query: () => "/allcategory",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoryQuery } = exclusiveApi