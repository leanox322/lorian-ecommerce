import { FC } from 'react'

import { COLORS } from '@/config/color.config'

import spinnerImg from './spinner.svg'

const Loader: FC = () => {
	return <img src={spinnerImg.src} alt='loader' width={200} height={200} />
}

export default Loader
