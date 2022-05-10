import { Vehicle} from "./Model/Vehicle"
import { RegisterVehicleView } from "./View/RegistervehicleView"

export class Command {
    allVehicles: Vehicle[]
    
    constructor(vehicleList: Vehicle[]) {
        this.allVehicles = vehicleList
    }

    manage(value: number) {
        if(value === 1) {
            const registerVehicleView = new RegisterVehicleView()
            this.registerVehicle(registerVehicleView.getDates())
        }
        else if(value === 2) {
            this.findVehicle('')
        }
    }
    
    registerVehicle(vehicle) {
        this.allVehicles.push(vehicle)
    }    

    findVehicle(plate) {
    }

}




