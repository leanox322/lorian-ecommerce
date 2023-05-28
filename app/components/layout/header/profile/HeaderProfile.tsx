import { FC } from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

const HeaderProfile: FC = () => {
	return (
		<Column size={3} className='flex items-center'>
			<SquareButton Icon={FiUser} />
			<div className='ml-3 flex flex-col'>
				<span className='text-sm'>User Profile</span>
			</div>
		</Column>
	)
}

export default HeaderProfile
