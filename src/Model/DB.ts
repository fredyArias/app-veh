import { writeln } from '../Controller/IO'
import { Message } from '../View/Message'
import { Vehicle } from './Vehicle'

export class DB {
  private static instance: DB
  allVehicles: Vehicle[] = []

  private constructor() {}

  static getInstance(): DB {
    if (!this.instance) {
      this.instance = new DB()
    }
    return this.instance
  }

  add(vehicle: Vehicle) {
    this.allVehicles.push(vehicle)
    writeln(`\n${Message.VEHICLE_SAVED}`)
  }

  search(plate: string) {
    // this.allVehicles.find((vehicle) => {
    //   if (vehicle.plate === plate) {
    //     return vehicle
    //   } else {
    //     return System.getInstance().printText(Message.VEHICLE_NOT_FOUND)
    //   }
    // })
  }
}
