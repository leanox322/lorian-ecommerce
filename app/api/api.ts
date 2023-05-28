import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IProduct } from '@/types/product.interface'

const API_URL = 'http://localhost:4200/products'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Product'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: builder => ({
		getProducts: builder.query<IProduct[], string>({
			query: searchTerm => `/?_sort=id&_order=desc&q=${searchTerm}`,
			providesTags: (result, id, searchTerm) => [
				{
					type: 'Product',
					id: searchTerm
				}
			]
		})
	})
})

export const { useGetProductsQuery } = api
