import Image from 'next/image'
import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { formatToCurrency } from '@/utils/format-to-currency'

import { useGetProductsQuery } from '@/api/api'

import ProductItem from './ProductItem'
import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = () => {
	const products = useTypedSelector(state => state.product.products)

	return (
		<Layout title='Shop' description='Catalog clothing and accessories'>
			<Row
				className='bg-dark-primary'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				{products.map((product, idx) => {
					return <ProductItem key={product.id} product={product} index={idx} />
				})}
			</Row>
		</Layout>
	)
}

export default Shop
