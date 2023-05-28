import React from 'react'
import { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInfo: FC = () => {
	return (
		<Row isBorder={false} className='mt-auto'>
			<Column size={3} className='flex-col border-t-2 border-black py-14'>
				<div className='font-normal text-4xl text-white mb-3 playfair'>
					100<span className='text-3xl playfair'>K</span>
				</div>
				<div className='text-white/60'>Customers</div>
			</Column>
			<Column size={9} className='flex-col border-t-2 border-r-0 border-black '>
				<div className='p-10'>
					<div className='font-normal text-white mb-2 playfair'>
						New Collection
					</div>
					<div className='text-white/60'>
						The red dress was inspired by a love of fashion and a fear of
						complacency. Our challange was to create a dress
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInfo
