import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={3}>
			<Link href='/' className='flex items-center'>
				<Image
					src='/images/logo.svg'
					width={70}
					height={70}
					alt='Lorian store'
					className='mr-2'
				/>
				<span>
					<span className='text-white tracking-[0.13em] block font-light'>
						LORIAN
					</span>
					<span className='tracking-[0.4em] block text-dark-gray text-sm font-extralight'>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
