import { AsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { IProduct, IProductDetails } from '@/types/product.interface'

interface IProductsInitialState {
	products: IProduct[]
}

const initialState: IProductsInitialState = {
	products: []
}

export const fetchProducts = createAsyncThunk(
	'products/fetch',
	async thunkApi => {
		const response = await fetch('http://localhost:4200/products')
		const data = await response.json()
		return data
	}
)

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		searchByName: (state, action) => {
			const filteredResult = state.products.filter(product =>
				product.name.toLowerCase().includes(action.payload.toLowerCase())
			)
			return { ...state, products: filteredResult }
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload // action.payload = data
		})
	}
})
