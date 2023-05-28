import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import SquareButton from '@/ui/square-button/SquareButton'

import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'

const SearchBar: FC = () => {
	const { isShown, setIsShown, ref } = useOutside(false)
	const [searchTerm, setSearchTerm] = useState('')
	const { searchByName } = useActions()

	function handleSearch() {
		searchByName(searchTerm)
	}

	return (
		<Link href='/shop'>
			<div className='relative flex flex-col items-center' ref={ref}>
				<SquareButton
					Icon={FiSearch}
					onClick={() => {
						setIsShown(!isShown)
					}}
				/>
				<div>
					<input
						type='text'
						autoComplete='off'
						placeholder='Search...'
						autoFocus
						onChange={e => {
							setSearchTerm(data => (data = e.target.value))
						}}
						value={searchTerm}
						className={cn(
							'absolute z-10 top-[4.2rem] bg-[#131313] px-3 py-4 text-sm w-80 -left-20 menu',
							isShown ? 'open-menu' : 'close-menu'
						)}
					/>
					<button
						onClick={handleSearch}
						className={isShown ? 'open-menu' : 'close-menu'}
					>
						Search
					</button>
				</div>
			</div>
		</Link>
	)
}

export default SearchBar
