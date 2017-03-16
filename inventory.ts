import { Location } from './location'
import { Products } from './products'

export interface Inventory {
	company?: string;
	date: string;
	location: Location;
	state: string;
	lines?: InventoryLines[];
	lost_found : number;
	id: number;
}

export interface InventoryLines {
	product: Products;
	quantity: number;
	expected_quantity?: number;
	id: number;
}
