import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import SquareButton from '@/ui/square-button/SquareButton'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShown, setIsShown, ref } = useOutside(false)
	const { clear } = useActions()
	const { cart, total } = useCart()

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={FiShoppingCart}
				number={cart.length}
				onClick={() => {
					setIsShown(!isShown)
				}}
			/>
			<div
				className={cn(
					'absolute z-10 top-[4.2rem] bg-[#131313] px-5 py-3 text-sm w-[12.5rem] -left-20 menu',
					isShown ? 'open-menu' : 'close-menu'
				)}
			>
				<div className='font-normal mb-5 text-lg'>My cart</div>

				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</div>
				<div className={styles.footer}>
					<div>Total:</div>
					<div className='text-lg font-semibold'>{formatToCurrency(total)}</div>
				</div>
				<div className='text-center mb-2'>
					{!!cart.length && (
						<button onClick={() => clear()} className='btn-link mt-5'>
							Clear all
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cart
