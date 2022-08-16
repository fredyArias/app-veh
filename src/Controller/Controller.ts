import { RegistratorController } from './RegistratorController'
import { SearchController } from './SearchController'

export class Controller {
  registator: RegistratorController
  search: SearchController

  constructor() {
    this.registator = new RegistratorController()
    // this.search = new SearchController()
  }

  start(value: number) {
    switch (value) {
      case 1:
        console.log('Option 1 <<')
        // this.registator.addVehicle()
        break
      case 2:
        console.log('Option2 <<')

      // this.search.getVehicle()
      default:
        break
    }
  }
}
