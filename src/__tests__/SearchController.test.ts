import { SearchController } from '../Controller/SearchController'
import { Vehicle } from '../Model/Vehicle'

describe('SearchController', () => {
  let searchController: SearchController

  beforeEach(() => {
    searchController = new SearchController()
  })

  describe('get vehicles', () => {
    test('should get vehicle list', () => {
      const vehicleList: Vehicle[] = searchController.getVehicles()
      console.log(vehicleList)
    })
  })

  // describe('get vehicle', () => {
  //   test('should return a vehicle list', () => {
  //     const vehicles = searchController.getVehicle()
  //     console.log(vehicles)
  //   })
  // })
})
