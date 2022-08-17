import { DB } from '../Model/DB'
import { SearchView } from '../View/SearchView'

export class SearchController {
  searchView: SearchView
  valueToSearch: string

  constructor() {
    this.searchView
  }

  getVehicle() {
    this.getByPlate()
  }

  getVehicles() {
    // return DB.allVehicles
  }

  private getByPlate() {
    // this.valueToSearch = this.searchView.interact()
    // this.search()
  }

  private getById() {
    // this.valueToSearch = this.valueToSearch = this.searchView.interact()
    // this.search()
  }

  private search() {
    // DB.search(this.valueToSearch)
  }
}
