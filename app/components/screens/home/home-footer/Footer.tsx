import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import SquareButton from '@/ui/square-button/SquareButton'

const Footer: FC = () => {
	return (
		<footer>
			<Row isBorder={false}>
				<Column size={7}>
					<div className='flex items-center justify-between py-9'>
						<div className='flex flex-col w-[60%]'>
							<span className='text-xl'>NEW ARRIVAL</span>
							<span className='text-4xl font-semibold mt-3 mb-6 leading-[1.5]'>
								NEW LORIAN EVENING DRESS DESIGN
							</span>
							<span>
								We are discovering a new fashion style, buy from the Lorian
								Store and become one of us
							</span>
						</div>
						<Image src='/images/arrival.jpg' alt='' width={220} height={210} />
						<Link href='/shop' className='self-start'>
							<SquareButton Icon={FiShoppingCart} />
						</Link>
					</div>
				</Column>
				<Column size={5}>
					<div className='flex justify-between w-[90%] py-9'>
						<div className='flex flex-col w-[60%]'>
							<span className='text-xl'>LATEST NEWS</span>
							<span className='text-4xl font-semibold mt-3 mb-6 leading-[1.5]'>
								OUR NEW DRESS COLLECTION
							</span>
							<span>
								Conquer city tops in comfort with lorian dress collection
							</span>
						</div>
						<SquareButton Icon={FiArrowRight} />
					</div>
				</Column>
			</Row>
		</footer>
	)
}

export default Footer
