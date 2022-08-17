import { DB } from '../Model/DB'
import { Vehicle } from '../Model/Vehicle'

describe('registrator class', () => {
  const fakeVehicle: Vehicle = {
    plate: 'ABC-123',
    brand: 'Mazda',
    model: '2018',
    status: 'onSale',
  }

  describe('test for add vehicle', () => {
    test('should return a list with at least one vehicle', () => {
      DB.getInstance().add(new Vehicle('ABC-123', 'Mazda', '2018'))
      const vehicleList = DB.getInstance().allVehicles
      console.log(vehicleList)

      expect(vehicleList[0]).toEqual(fakeVehicle)
    })
  })
})
