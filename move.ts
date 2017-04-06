export interface Move {
	id: number,
	product: number,
	quantity: number,
	uom: string,
	state: string,
	'product.code': string,
	'product.rec_name': string,
}