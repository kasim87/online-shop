import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { build } from 'esbuild'

export const productsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: (builder)=> ({
        getProducts: builder.query({
            query: ()=> '/products',
        })
    })
})

export const {useGetProductsQuery} = productsApi