import { FC } from 'react'
import { AiFillChrome } from 'react-icons/ai'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className='h-10 w-10 bg-black flex items-center justify-center hover:bg-primary/30 transition-colors duration-450 relative rounded'
		>
			{!!number && (
				<span className='flex h-4 w-4 items-center justify-center rounded-full bg-primary p-0.5 text-[0.75rem] text-white absolute -top-1 -right-1'>
					{number}
				</span>
			)}
			<Icon color='#7D7D7D' size={21} />
		</button>
	)
}

export default SquareButton
