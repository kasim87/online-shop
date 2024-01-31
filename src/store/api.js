import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: (builder)=> ({
        getProducts: builder.query({
            query: ()=> '/products',
        }),
        getCategories: builder.query({
            query: ()=> '/products/categories',
        }),
        getProductsByCategories: builder.query({
            query: (them)=> `/products/category/${them}`,
        })
    })
})

export const {useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoriesQuery} = productsApi