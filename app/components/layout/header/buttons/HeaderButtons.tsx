import Link from 'next/link'
import { FC } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiBell } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

import Cart from './cart/Cart'
import SearchBar from './search-bar/SearchBar'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-5'>
			<SearchBar />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<Cart />
		</Column>
	)
}

export default HeaderButtons
