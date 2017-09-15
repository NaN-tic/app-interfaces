/**
 * Shipment interface for stock
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
*/

export interface Shipment {
    id: number,
    state: string,
    from_location: number,
    to_location: number,
    company: number,
    code: string,
    reference: string,
    planned_date: string,
    moves?: any[]
}
