
export interface Shipment {
  from_location: number,
  to_location: number,
  employee: number,
  id: number,
  company: number,
  catalog: number,
  state: string,
  planned_date?: any,
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
