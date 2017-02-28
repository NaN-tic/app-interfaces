import { Location } from './location'
import { Products } from './products'

export interface Inventory {
	company_id?: string;
	date: string;
	location: Location;
	state: string;
	lines?: InventoryLines[];
	id: number;
}

export interface InventoryLines {
	product: Products;
	quantity: number;
	expected_quantity?: number;
	id: number;
}
