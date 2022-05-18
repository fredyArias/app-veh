import { Vehicle} from "./Model/Vehicle"
import { View } from "./View/View"

export class Command {
    allVehicles: Vehicle[]
    
    constructor(vehicleList: Vehicle[]) {
        this.allVehicles = vehicleList
    }

    manage(value: number) {
        if(value === 1) {
            const view = new View()
            this.registerVehicle(view.registerVehicle())
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




