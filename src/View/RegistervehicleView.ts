import { Console } from "../Console"
import { Message } from "../Message"
import { VehicleType, Vehicle } from "../Model/Vehicle"

export class RegisterVehicleView {

  getDates() {
    Console.writeln((Message.REGISTER_VEHICLE))
    const typeVehicle: VehicleType = Console.readString(Message.TYPE_VEHICLE)
    const plate: string = Console.readString(Message.PLATE) 
    const brand: string = Console.readString(Message.BRAND) 
    const model: number = Console.readNumber(Message.MODEL)
    const vehicle = new Vehicle(typeVehicle, plate, brand, model)

    return vehicle  
  }
}