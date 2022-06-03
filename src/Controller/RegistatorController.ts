import { Vehicle } from '../Model/Vehicle'
import { DB } from '../Model/DB'
import { RegistatorView } from '../View/RegistatorView'

export class RegistatorController {
  registatorView: RegistatorView

  constructor() {
    this.registatorView = new RegistatorView()
  }

  addVehicle() {
    const vehicleData = this.registatorView.getVehicleData()
    this.saveVehicle(new Vehicle(vehicleData.plate, vehicleData.brand, vehicleData.model))
  }

  private saveVehicle(vehicle: Vehicle) {
    DB.add(vehicle)
  }
}
