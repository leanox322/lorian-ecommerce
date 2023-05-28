import { FC } from 'react'

import Column from '@/ui/grid/Column'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

interface IProductItem {
	product: IProduct
	index: number
}

const ProductItem: FC<IProductItem> = ({ product, index }) => {
	const { cart } = useCart()
	const { addToCart, removeFromCart } = useActions()

	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<Column size={index === 0 ? 3 : index === 4 ? 3 : 2} key={product.id}>
			<div className='text-white text-center pb-5'>
				<div className='h-[283px] flex flex-col items-center justify-center mb-4'>
					<img src={product.image} width={220} height={220} />
				</div>
				<h2 className='playfair mb-2 text-lg'>{product.name}</h2>
				<p className='mb-3'>{formatToCurrency(product.price)}</p>
				<button
					className='btn-link'
					onClick={() =>
						currentElement
							? removeFromCart({ id: currentElement.id })
							: addToCart({ product, quantity: 1 })
					}
				>
					{currentElement ? 'Remove from cart' : 'Add to cart'}
				</button>
			</div>
		</Column>
	)
}

export default ProductItem
