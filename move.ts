export interface Move {
	id: number,
	product: number,
	quantity: number,
	uom: string,
	state: string,
	from_location: number,
	to_location: number,
	'product.code': string,
	'product.rec_name': string,
	expected_quantity?: number,
	scanned_quantity?: number,
    shipment?: string,
    shipment_name?: string,
    company: number,
    currency: number,
    unit_price: string,
}
