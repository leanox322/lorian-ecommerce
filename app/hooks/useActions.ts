import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { productSlice } from '@/store/products/products.slice'

import { cartSlice } from '../store/cart/cart.slice'

const rootAction = {
	...cartSlice.actions,
	...productSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
