export type StatusVehicle = 'onSale' | 'soldOut'

export class Vehicle {
  plate: string
  brand: string
  model: number
  status: StatusVehicle

  constructor(
    plate: string,
    brand: string,
    model: number,
    status: StatusVehicle = 'onSale'
  ) {
    ;(this.plate = plate), (this.brand = brand), (this.model = model)
    this.status = status
  }
}
