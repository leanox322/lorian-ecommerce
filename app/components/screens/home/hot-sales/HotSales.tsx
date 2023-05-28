import Link from 'next/link'
import React from 'react'
import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

const HotSales: FC = () => {
	return (
		<div className='text-white py-16 px-8'>
			<div className='text-sm'>HOT SALES</div>
			<h1 className='text-5xl w-[95%] leading-[1.5] font-normal font-serif mt-5 mb-14 playfair'>
				A RED DRESS WILL BRIGHTEN UP YOUR EVENING
			</h1>

			<div className='flex items-center justify-between'>
				<div>
					<span className='text-3xl mr-2'>{formatToCurrency(195)}</span>
					<span className='line-through opacity-50'>
						{formatToCurrency(295)}
					</span>
				</div>
				<Link href='/shop'>
					<button className='btn-link'>buy now</button>
				</Link>
			</div>
		</div>
	)
}

export default HotSales
