import { IReview } from './reviews.interface'

export interface IProduct {
	id: number
	name: string
	image: string
	slug: string
	price: number
	reviews: IReview[]
}

export interface IProductDetails {
	product: IProduct
}
