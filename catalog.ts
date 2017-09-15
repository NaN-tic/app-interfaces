/**
 * Shipment and ShipmentLines interface for stock
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
*/

export interface Shipment {
    id: number,
    from_location: number,
    to_location: number,
    employee: number,
    company: number,
    catalog: number,
    state: string,
    planned_date?: any,
    planned_start_date: any,
    catalog_lines?: any
}

export interface ShipmentLines {
    id: number,
    product: number,
    'product.rec_name': string,
    max_quantity: number,
    quantity: number,
    served_quantity: number,
    'product.template.cost_price': number,
}
