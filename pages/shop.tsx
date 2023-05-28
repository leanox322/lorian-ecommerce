import { IProductsPage } from '.'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchProducts } from '@/store/products/products.slice'

import { useActions } from '@/hooks/useActions'

import { IProduct } from '@/types/product.interface'

import Shop from '@/screens/shop/Shop'

const ShopPage: NextPage<IProductsPage> = ({ products }) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return <Shop products={products} />
}

export default ShopPage
