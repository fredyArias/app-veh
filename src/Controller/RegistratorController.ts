import { Vehicle } from '../Model/Vehicle'
import { DB } from '../Model/DB'
import { RegistratorView } from '../View/RegistratorView'

export class RegistratorController {
  registratorView: RegistratorView

  constructor() {
    this.registratorView = new RegistratorView()
  }

  addVehicle() {
    const vehicleData = this.registratorView.interact()
    DB.add(Vehicle.fromVehicleData(vehicleData))
  }
}
