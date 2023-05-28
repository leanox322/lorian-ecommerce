import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import Loader from '@/ui/loader/Loader'

import Footer from './home-footer/Footer'
import HomeInfo from './home-information/HomeInfo'
import HotSales from './hot-sales/HotSales'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row
				className='bg-dark-primary'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				<Column size={7} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={833} height={727} />
				</Column>
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSales />
					<HomeInfo />
				</Column>
			</Row>
			<Footer />
		</Layout>
	)
}

export default Home
