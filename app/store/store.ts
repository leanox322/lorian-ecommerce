import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { api } from '@/api/api'

import { cartSlice } from './cart/cart.slice'
import { productSlice } from './products/products.slice'

const persistConfig = {
	key: 'lorian-store',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	product: productSlice.reducer,
	[api.reducerPath]: api.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
