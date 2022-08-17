import { Vehicle } from '../Model/Vehicle'
import { DB } from '../Model/DB'
import { RegistratorView } from '../View/RegistratorView'

export class RegistratorController {
  registratorView: RegistratorView

  constructor() {
    this.registratorView = new RegistratorView()
  }

  addVehicle() {
    const { plate, brand, model } = this.registratorView.interact()
    DB.getInstance().add(new Vehicle(plate, brand, model))
  }
}
