import { RegistratorController } from './RegistratorController'
import { SearchController } from './SearchController'

export class Controller {
  registrator: RegistratorController
  search: SearchController

  constructor() {
    this.registrator = new RegistratorController()
    // this.search = new SearchController()
  }

  start(value: number) {
    switch (value) {
      case 1:
        this.registrator.addVehicle()
        break
      case 2:
        console.log('Option2 <<')

      // this.search.getVehicle()
      default:
        break
    }
  }
}
