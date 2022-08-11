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

  static fromVehicleData(vehicleData) {
    return new Vehicle(vehicleData.plate, vehicleData.brand, vehicleData.model)
  }
}
