import { System } from '../Controller/System'
import { Message } from '../View/Message'
import { Vehicle } from './Vehicle'

export abstract class DB {
  static allVehicles: Vehicle[]

  static add(vehicle: Vehicle) {
    console.log('vehículo guardado correctamente')

    // this.allVehicles.push(vehicle)
  }

  static search(plate: string) {
    this.allVehicles.find((vehicle) => {
      if (vehicle.plate === plate) {
        return vehicle
      } else {
        return System.getInstance().printText(Message.VEHICLE_NOT_FOUND)
      }
    })
  }
}
